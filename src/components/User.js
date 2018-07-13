import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
    <div className = "User">
        <h1>Welcome User {this.props.match.params.username}</h1>
    </div>
    );
  }
}

export default User;