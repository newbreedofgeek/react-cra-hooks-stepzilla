import React, {useState, forwardRef, useImperativeHandle} from 'react';

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const HooksWithValidation = forwardRef(({jumpToStep}, ref) => {
  const [valid, setValid] = useState(false);
  
  const toggleValidState = () => {
    setValid(!valid);
  }

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    isValidated() {
      return valid;
    }
  }));

  return <>
    I am a Hooks based Functional Component: My validation state is {valid.toString().toUpperCase()}
    <br />
    <div className="toggle" onClick={toggleValidState}>[Change validation state]</div>
    <div className="toggle" onClick={() => jumpToStep(2)}>[Jump to Step 2]</div>
  </>
});

export default HooksWithValidation;
