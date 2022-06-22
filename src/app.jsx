import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
          .get('https://www.cccareerssdts.demo.coolify.io')
          .then(response => response.data)
          .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>

        <div className="container">
          <div className="row gy-3">
            <div className='col-sm-12 bg-light p-5 text-center'>
              <h1>San Diego Top Spots</h1>
              <h4>A list of the top 30 places to see in San Diego, California</h4>
            </div>
          
            <div className='col-sm-12 bg-light'>
              <pre>
                { JSON.stringify(this.state.topspots, null, 2) }
              </pre>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
