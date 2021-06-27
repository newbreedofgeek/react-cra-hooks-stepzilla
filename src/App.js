import React from 'react';
import logo from './logo.svg';
import './App.css';

// import StepZilla from 'react-stepzilla';
import StepZilla from './sandbox/StepZilla';
// import StepZilla from './sandbox/StepZillaLive';

import ClassComponent from './ClassComponent';
import ClassOldSchool from './ClassOldSchool';
import PureComponent from './PureComponent';
import HooksNoValidation from './HooksNoValidation';
import HooksWithValidation from './HooksWithValidation';
import End from './End';
 
function App() {
  const steps = [
    {name: 'HooksWithValidation', component: <HooksWithValidation />},
    {name: 'ClassComponent', component: <ClassComponent />},
    {name: 'ClassOldSchoolComponent', component: <ClassOldSchool />},
    {name: 'PureComponent', component: <PureComponent/>},
    {name: 'HooksNoValidation', component: <HooksNoValidation />},
    {name: 'End', component: <End />},
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
