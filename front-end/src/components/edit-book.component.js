import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username: '',
        title: '',
        author: '',
        pages: 0,
        date: new Date(),
        users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          title: response.data.title,
          author: response.data.author,
          pages: response.data.pages,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.username) });
      })
      .catch((error) => {
        console.log(error);
      })
    }

    onChangeUsername(e) {
        this.setState({
        username: e.target.value
        });
    }
    onChangeTitle(e) {
        this.setState({
        title: e.target.value
        });
    }
    onChangeAuthor(e) {
        this.setState({
        author: e.target.value
        });
    }
    onChangePages(e) {
        this.setState({
        pages: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
        date: date
        });
    }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      username: this.state.username,
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      date: this.state.date,
    };

    console.log(book);

    axios.post('http://localhost:5000/books/update/'+this.props.match.params.id, book)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
        <div>
        <h3>Edit Book Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
          </div>
          <div className="form-group"> 
            <label>Author: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.author}
                onChange={this.onChangeAuthor}
                />
          </div>
          <div className="form-group">
            <label>Pages: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.pages}
                onChange={this.onChangePages}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Edit" className="btn btn-dark" />
          </div>
        </form>
      </div>
    )
  }
}