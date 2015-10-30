import React, { PropTypes } from 'react';
import Immutable from 'immutable';

// Super simple example of the simplest possible React component
const HelloWorld = React.createClass({
  displayName: 'HelloWorldRedux',

  propTypes: {
    actions: PropTypes.object.isRequired,
    $$helloWorldStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  },

  _handleChange() {
    const name = this.refs.name.value;
    this.props.actions.updateName(name);
  },

  render() {
    const $$helloWorldStore = this.props.$$helloWorldStore;
    const _handleChange = this._handleChange;
    debugger;
    const name = $$helloWorldStore.get('name');
    return (
      <div>
        <h3>
          Hello, {name}!
        </h3>
        <p>
          Say hello to:
          <input type="text" ref="name" value={name} onChange={_handleChange} />
        </p>
      </div>
    );
  },
});

export default HelloWorld;
