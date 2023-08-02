import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
  render() {
    return (
      //   Create a one straight horizontally aligned contents navbar with a 'Rick and Morty' title and Home and Search Page links
      <>
        <div className="navbar">
          <h3>Rick and Morty</h3>
          <div className="navbar-links">
            <a className="navbar-link" href="/">Home</a>
            <a className="navbar-link" href="/search">Search</a>
          </div>
        </div>
      </>
    );
  }
}
