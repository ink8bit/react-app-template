import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);

    this.message = props.message;
    console.log(this.message);
  }

  render() {
    return (
      <main className="content">
        <p>{this.props.message}</p>
      </main>
    );
  }
}

export default Content;
