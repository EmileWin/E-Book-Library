import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar.component"
import BooksList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreateUser from "./components/create-user.component";
import Stats from "./components/stats.component";

const notFoundPage = props => (
  <h1 style={{textAlign: 'center'}}>404</h1>
)

const welcomePage = props => (
  <h1 style={{textAlign: 'center'}}>Welcome to E-Book Library</h1>
)

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br/>
        <Switch>
        <Route path="/" exact component={welcomePage} />
        <Route path="/books" exact component={BooksList} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/create" component={CreateBook} />
        <Route path="/user" component={CreateUser} />
        <Route path="/stats" component={Stats} />
        <Route component={notFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
