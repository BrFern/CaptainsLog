import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1> New Page</h1>
        <form action="/logs" method ="POST">
            Title: <input type ="text" name ="title"/> <br/>
            Entry: <input type = "textarea" name="entry"/> <br />
            Ship is Broken: <input type = "checkbox" name="shipIsBroken"/><br />
            <input type = "submit" value="Submit"></input>
        </form>


      </div>
        

    )
  }
}

module.exports = New;