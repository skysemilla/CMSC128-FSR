import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <div class="ui menu">
          <a class="item">Editorials</a>
          <a class="item">Reviews</a>
          <a class="item">Upcoming Events</a>
        </div>
      </nav>
    );
  }
}
