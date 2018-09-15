import React, { Component } from 'react';
import NetworkMap from './NetworkMap';
import Airtable from 'airtable';

class NetworkMapContainer extends Component {
  constructor() {
    super()
    this.state = {
      fetchedNodes: null,
      fetchedLinks: null,
    }
  }
  componentDidMount() {
    // See docs: https://airtable.com/appzeqG8nWiyOHXXY/api/docs#nodejs/table:organizations:list
    const base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);

    base('Organizations').select({
      maxRecords: 200,
    }).eachPage((records, fetchNextPage) => {
      const nodes = [];
      const links = [];
      records.forEach((record) => {
        nodes.push({
          id: record.id,
          orgName: record.get('Name'),
        })
        const linksAsDest = record.get('Links as Dest') || [];
        const linksAsSource = record.get('Links as Source') || [];
        linksAsDest.forEach(destLink =>
          links.push({
            source: destLink,
            target: record.id,
          })
        )
        linksAsSource.forEach(sourceLink =>
          links.push({
            source: record.id,
            target: sourceLink,
          })
        )
      });
      this.setState({
        fetchedNodes: nodes,
        fetchedLinks: links,
      })
      // fetchNextPage();
    }, (err) => {
      if (err) { console.error(err); return <div>Error :(</div>; }
      });
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
