import React, { Component } from 'react';
import axios from 'axios';

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {books: 0, users: 0};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/books/count')
         .then(response => {
           this.setState({ books: response.data });
         })
         .catch((error) => {
            console.log(error);
        })

        axios.get('http://localhost:5000/users/count')
         .then(response => {
           this.setState({ users: response.data });
         })
         .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div style={{width:'300px'}}>
            <h3>Stats</h3>
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Item</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Users</td>
                <td>{this.state.users}</td>
              </tr>
              <tr>
                <td>Records</td>
                <td>{this.state.books}</td>
              </tr>
              </tbody>
            </table>
          </div>
        )
      }
}