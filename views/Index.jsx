import React, { Component } from 'react'
import Logs from '../models/logs';

export default class Index extends Component {
  render() {
    const logs = this.props.logs;
    return (
      
      <div>
        <h1> Logs</h1>
        <body>
        <nav> 
            <a href="/logs"> Return </a>
        </nav>
            <ul>
                {logs.default.map((logs, i) => {
                    return (  <li>
                        <a href={`/logs/${logs.id}`}>
                         {logs.title}
                        </a>
                     </li>)
                })}
            </ul>


        </body>




      </div>
    )
  }
}
module.exports = Index;
