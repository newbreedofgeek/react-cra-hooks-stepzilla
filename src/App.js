import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepZilla from 'react-stepzilla';

import ClassComponent from './ClassComponent';
import PureComponent from './PureComponent';
import HooksNoValidation from './HooksNoValidation';
import HooksWithValidation from './HooksWithValidation';
import End from './End';
 
function App() {
  const steps = [
    {name: 'Step 1', component: <ClassComponent />},
    {name: 'Step 2', component: <PureComponent/>},
    {name: 'Step 3', component: <HooksNoValidation />},
    {name: 'Step 4', component: <HooksWithValidation />},
    {name: 'Step 5', component: <End />},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <StepZilla steps={steps} />
      </header>
    </div>
  );
}

export default App;
