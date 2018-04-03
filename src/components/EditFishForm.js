import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    //update fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // 2. send the new fish upstream
    this.props.updateFish(this.props.fish, updatedFish)
  }

  handleClick = (event) => {
    this.props.deleteFish(this.props.fish)
  }

  render() {
    return <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={this.handleChange}
        value={this.props.details.name} />
      <input
        type="text"
        name="price"
        onChange={this.handleChange}
        value={this.props.details.price} />
      <select
        type="text"
        name="status"
        onChange={this.handleChange}
        value={this.props.details.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        onChange={this.handleChange}
        value={this.props.details.desc} />
      <input
        type="text"
        name="image"
        onChange={this.handleChange}
        value={this.props.details.image} />

      <button onClick={this.handleClick}>Remove Fish</button>
    </div>
  }
}

export default EditFishForm;
