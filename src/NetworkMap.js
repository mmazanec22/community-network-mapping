import React, { Component } from 'react';
import { ResponsiveNetworkFrame } from 'semiotic';

class NetworkMap extends Component {
  constructor() {
    super();
  }

  render() {
    return (<ResponsiveNetworkFrame
        responsiveWidth
        responsiveHeight
        nodes={this.props.nodes}
        edges={this.props.links}
        edgeStyle={{
          stroke: '#11d4d4',
          strokeWidth: '2px',
        }}
        nodeStyle={{
          stroke: '#f6558b',
          fill: '#f6558b',
          strokeOpacity: 0.5,
          strokeWidth: 3,
        }}
        networkType={{ type: 'force', iterations: 500, edgeStrength: 0.1 }}
        nodeLabels={d => d.orgName}
        hoverAnnotation={d => {console.log(d); return 'foo'}}
      />)
  }
}

export default NetworkMap;
