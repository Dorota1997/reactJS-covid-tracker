import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
