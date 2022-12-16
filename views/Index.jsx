import React, { Component } from 'react'
import logs from '../models/logs'

export default class Index extends Component {
  render() {
    // const logs = this.props.logs;
    return (
      <div>
        <h1> Logs</h1>
        <body>
        <nav> 
            <a href="/logs/new"> Create New Entry </a>
        </nav>
            <ul>
                {this.props.logs.map((logs, i) => {
                    return (  <li key = {i}>
                        <a href={`/logs/${logs.id}`}> 
                         {logs.title}
                         </a>
                         {logs.entry}
                     </li>
                     )
                })}
            </ul>
        </body>
      </div>
    )
  }
}
module.exports = Index;
