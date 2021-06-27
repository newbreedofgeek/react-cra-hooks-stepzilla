import React, { Component } from 'react';

export default class ClassOldSchool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false
    };

    this.isValidated = this.isValidated.bind(this);
    this.toggleValidState = this.toggleValidState.bind(this);
  }

  isValidated() {
    return this.state.valid;
  }

  toggleValidState() {
    this.setState({
      valid: !this.state.valid
    });
  }

  render() {
    return <>
      I am a old school ClassComponent (nothing special, it's and example of how plp used to write react components during the early years and bind methods to it) : My validation state is {this.state.valid.toString().toUpperCase()}
      <br />
      <div className="toggle" onClick={this.toggleValidState}>[Change validation state]</div>
    </>
  }
}
