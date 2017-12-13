import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../actions/index';
import { bindActionCreators } from 'redux';

class ToggleView extends Component {
  constructor(props) {
    super(props);

    this.state = { view: this.props.currentView };

    console.log("Current View: ", this.props.currentView);
  }

  render() {
    return (
      <span className="input-group-btn">
        <button type="button"
          className="btn btn-secondary"
          onClick={() => this.props.toggleView(!this.props.view)}>Toggle Details</button>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  };
}

// Any data returned from this function will become props for ToggleView component
function mapDispatchToProps(dispatch) {
  // When toggleView is called, the result should be passed to all reducers
  return bindActionCreators({ toggleView: toggleView }, dispatch);
}

// Promote ToggleView from component to container
// Make the new dispatch method, toggleView, available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ToggleView);
