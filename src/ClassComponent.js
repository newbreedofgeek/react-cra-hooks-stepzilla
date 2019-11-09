import React from 'react';

export default class ClassComponent extends React.Component {
  state = {
    'valid': false
  }

  toggleValidState = () => {
    this.setState({
      valid: !this.state.valid
    });
  }

  isValidated = () => {
    return this.state.valid;
  }

  render() {
    return <>
      I am a traditional ClassComponent: My validation state is {this.state.valid.toString()}
      <br />
      <div className="toggle" onClick={this.toggleValidState}>[Change validation state]</div>
    </>
  }
}
