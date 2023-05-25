import React, { Component } from 'react';
import axios from 'axios';
import { TopSpot } from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
    .get('https://sd-top-spots.tbox.tools/')
    .then(response => response.data)
    .then(topspots => this.setState({topspots}))
    // to get data through local route
    // .get('/getdata')
    // .then(response => this.setState({topspots : response.data}));
  }

  render() {
    return (
        <div className="container-fluid">
          <div className='card sticky-top bg-warning border-0'>
            <div className='card-header text-center p-5 border-0'>
                <h1 className='card-title'>San Diego Top Spots</h1>
                <h6>A list of the top 30 places to see in San Diego, California</h6>
            </div>
          </div>
          
              {
                this.state.topspots.map((topspot, i) => (
                  <TopSpot
                          key={i}
                          name={topspot.name}
                          description={topspot.description}
                          location={topspot.location}
                          />
                ))
              }
          </div>
    );
  };
};

export default App;