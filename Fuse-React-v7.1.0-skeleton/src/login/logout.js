
import React, { Component } from 'react'

export  class UseMutation extends Component {

  logout = () => {
    localStorage.clear('title')
    window.location.href = "http://localhost:3000/" + "login";
  }
  
  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}
