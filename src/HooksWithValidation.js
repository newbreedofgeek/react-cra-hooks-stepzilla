import React, {useState} from 'react';

const HooksWithValidation = ({jumpToStep}) => {
  const [valid, setValid] = useState(false);
  
  const toggleValidState = () => {
    setValid(!valid);
  }

  // const isValidated = () => {
  //   return valid;
  // }

  return <>
    I am a Hooks based Functional Component: My validation state is {valid.toString().toUpperCase()}
    <br />
    <div className="toggle" onClick={toggleValidState}>[Change validation state]</div>
    <div className="toggle" onClick={() => jumpToStep(2)}>[Jump to Step 2]</div>
  </>
}

HooksWithValidation.isValidated = () => {
  return true;
}

export default HooksWithValidation;
