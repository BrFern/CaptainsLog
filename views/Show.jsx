import React, { Component } from 'react'
import Logs from '../models/logs'

export default class Show extends Component {
  render() {
    return (
    <body>
      <div>
        <h1> Captain's Log </h1>
        <h2> {Logs.title} </h2>
        <h2> {Logs.entry}</h2>
        <h2> {Logs.shipIsBroken}</h2>


        


      </div>
      </body>
    )
  }
}

module.exports = Show