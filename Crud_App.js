import React, { Component } from 'react';

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", userArr: [] };
    this.handleIpValue = this.handleIpValue.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleDeleteName = this.handleDeleteName.bind(this);
  }
  handleIpValue(e) {
    this.setState({ inputValue: e.target.value });
    this.setState({
      err: false
    });
  }
  handleAddUser() {
    let dummyArray = [...this.state.userArr].filter(
      e => e === this.state.inputValue
    );
    if (dummyArray.length) {
      this.setState({
        err: true
      });
    } else {
      this.setState({
        userArr: this.state.userArr.concat([this.state.inputValue])
      });
      this.setState({ inputValue: "" });
      this.setState({
        err: false
      });
    }
  }
  handleEditName(e) {
    this.setState({ inputValue: e.target.getAttribute("data-name") });
    this.setState({
      err: false
    });
  }
  handleDeleteName(e) {
    var dummyArray = [...this.state.userArr];
    var index = dummyArray.indexOf(e.target.getAttribute("data-name"));
    if (index !== -1) {
      dummyArray.splice(index, 1);
      this.setState({ userArr: dummyArray });
    }
  }
  render() {
    return (
      <div>
        <h1>CRUD Application</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleIpValue}
        />
        <button onClick={this.handleAddUser}>ADD</button>
        {this.state.err === true ? (
          <div>{this.state.inputValue} already present</div>
        ) : (
          ""
        )}
        {this.state.userArr.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userArr.map((arrList, key) => {
                return (
                  <tr key={key}>
                    <td>{arrList} </td>
                    <td>
                      <button
                        className="editBtn"
                        data-name={arrList}
                        onClick={this.handleEditName}
                      >
                        Edit
                      </button>
                      <button
                        className="deletBtn"
                        data-name={arrList}
                        onClick={this.handleDeleteName}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ToDoList;