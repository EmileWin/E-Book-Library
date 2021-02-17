import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">E-Book Library</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/books" className="nav-link">Records</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Book Record</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/stats" className="nav-link">Stats</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}