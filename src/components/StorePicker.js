import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  // "this" is not bound to the react component in custom methods
  // therefore we must manually bind (via hoist) our methods using arrow functions
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. next grab the text from the box
    const storeName = this.myInput.value.value;
    //console.log(this.myInput.value.value);
    // 3. we're going to transition from / to /store/:storeId
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store </h2>
        <input
          type="text"
          required placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

//StorePicker.contextTypes = {
//  router: React.PropTypes.object
//}

export default StorePicker;
