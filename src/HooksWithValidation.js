import React, {useState} from 'react';

export default function HooksWithValidation() {
  const [valid, setValid] = useState(false);
  
  const toggleValidState = () => {
    setValid(!valid);
  }

  return <>
    I am a Hooks based Functional Component: My validation state is {valid.toString()}
    <br />
    <div className="toggle" onClick={toggleValidState}>[Change validation state]</div>
  </>
}
