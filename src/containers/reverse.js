import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/reverse.actions.js';

class Reverse extends React.Component {
  constructor(props) {
    super(props);
  }
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      console.log('enter');
    }
  }
  render() {
    const { reverse } = this.props;
    return(
      <div>
        <input onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Reverse);

// Create a component with one < input /> element for text.
// When you enter any text into it, it should automatically render the text
// in an < h1 > element on the page
//
// ...but the text should be reversed in the < h1 > element !
// Ordinarily, you would probably just rely on the component 's this.state object,
// but I want you to implement redux for the practice.
