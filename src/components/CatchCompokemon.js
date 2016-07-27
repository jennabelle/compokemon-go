import React from 'react';

import './CatchCompokemon.css';

// This component should contain a text input to fill in a compokemon type, and a button to submit.
// Once the button is clicked, `onCaught` should be called with the type.
class CatchCompokemon extends React.Component {
  render() {
    return (
      <div className="CatchCompokemon">
        <input value={this.props.value} onChange={this.props.onChange} />
        <button onClick={this.props.onCaught}>Catch</button>
      </div>
    );
  }
}

export default CatchCompokemon;
