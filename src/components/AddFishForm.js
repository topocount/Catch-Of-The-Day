import React from "react";

class AddFishForm extends React.Component {
  /*
  Steps for hooking up the reference to the event:
  0. Create the (...)Ref variables using React.createRef();
  1. Create the createFish arrow function with the event arg
  2. create the fish const and containing ref reference objects
  3. create the ref properties in the html tags
  */

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. pass the form values into state via App.addFish()
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value), //value in cents
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }
    this.props.addFish(fish);
    // 3. refreshes the form
    event.currentTarget.reset();
  }
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef}   type="text" placeholder="desc" />
        <input name="image" ref={this.imageRef}  type="text" placeholder="image" />
        <button type="submit" ref={this.submitRef}>+ Add Fish </button>
      </form>
    )
  }
}

export default AddFishForm;
