import React, { Component } from 'react';
import NetworkMap from './NetworkMap';

class NetworkMapContainer extends Component {
  constructor() {
    super()
    this.state = {
      fetchedNodes: null,
      fetchedLinks: null,
    }
  }
  componentDidMount() {
    fetch(
      'https://8ipt3269ae.execute-api.us-east-1.amazonaws.com/latest')
      .then(results => results.json())
      .then(json =>
        this.setState({
          fetchedNodes: json.fetchedNodes,
          fetchedLinks: json.fetchedLinks,
        })
      )
  }
  render() {
    if (!this.state.fetchedNodes || !this.state.fetchedLinks) {
      return <div>Loading data...</div>;
    }
    return (<div id="networkVisContainer">
      <NetworkMap
        nodes={this.state.fetchedNodes}
        links={this.state.fetchedLinks}
      />
    </div>)
  }
}

export default NetworkMapContainer;
