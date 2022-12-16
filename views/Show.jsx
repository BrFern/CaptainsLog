import React, { Component } from 'react'
import logs from '../models/logs'

export default class Show extends Component {
  render() {
    return (
    <body>
      <div>
        <h1> Captain's Log </h1>
        <h2> {logs.title} </h2>
        <p> {logs.entry}</p>
        <p> {logs.shipIsBroken?'Ship Broken': "Ship is not broken"}
        </p>
            <a href ='/logs'> Return </a>
      </div>
      </body>
    )
  }
}

module.exports = Show