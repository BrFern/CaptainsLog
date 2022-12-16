import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    return (
        <body> 
      <div>
        <nav>
            <a href="/logs"> No changes </a>
        </nav>
        <h1> Edit Logs </h1>
        <form action = {`/logs/${this.props.logs._id} ?_method=PUT`} method="POST">
            Title: {" "}
            <input 
                type="text"
                name="name"
                />
                <br />
            Entry: {" "}
                <input 
                    type="text"
                    name="entry"
                /> <br />
            Ship is Broken: {" "}
                <input 
                    type="boolean"
                    name="ship"
                    /> <br />
        </form>
      </div>
      </body>
    )
  }
}

module.exports = Edit;
