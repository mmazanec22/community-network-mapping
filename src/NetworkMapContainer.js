import React, { Component } from 'react';
import NetworkMap from './NetworkMap';
import Airtable from 'airtable';

class NetworkMapContainer extends Component {
  constructor() {
    super()
  }
  render() {
    // See docs: https://airtable.com/appzeqG8nWiyOHXXY/api/docs#nodejs/table:organizations:list
    var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);

    base('Organizations').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            console.log('Retrieved', record.get('Name'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    // Make API call-- maybe in another lifecycle stage
    // Return loading animation if not done, error message if error, or vis
    return (<div id="networkVisContainer">
      <NetworkMap/>
    </div>)
  }
}

export default NetworkMapContainer;
