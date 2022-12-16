import React, { Component } from 'react'
import logs from '../models/logs'

export default class Show extends Component {
  render() {
    return (
    <body>
      <div>
        <h1> Captain's Log </h1>
        <h2> {logs.title} </h2>
        <h2> {logs.entry}</h2>
        <h2> {logs.shipIsBroken}</h2>
            <a href ='/logs/new'> Return </a>

      </div>
      </body>
    )
  }
}

module.exports = Show