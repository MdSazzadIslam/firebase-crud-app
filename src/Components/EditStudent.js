import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "../Services";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      id: "",
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount = () => {
    debugger;

    this.setState({
      id: this.props.match.params.id,
      name: this.props.match.params.name,
    });
  };

  handleChange = (e) => {
    const { target } = e;
    switch (target.name) {
      case "id":
        this.setState({ id: target.value });
        break;

      case "name":
        this.setState({ name: target.value });
        break;

      default:
        break;
    }
  };

  update = async (e, id, name) => {
    e.preventDefault();
    try {
      const data = {
        id: id,
        name: name,
      };

      await Services.updateData(this.state.key, data);
      this.clearData();
      alert("Updated successfully");
      this.props.history.push("/student-list");
    } catch (error) {
      console.log(error);
    }
  };

  clearData = () => {
    this.setState({
      id: "",
      name: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <Link to="/student-list">List</Link>
        <form
          onSubmit={(e) => {
            this.update(e, this.state.id, this.state.name);
          }}
        >
          <input
            type="text"
            placeholder="id"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
