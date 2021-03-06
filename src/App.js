import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import covidImage from './images/covid19.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: 'Poland',
  }

  async componentDidMount() {
    this.handleCountryChange(this.state.country);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img className="image" src={covidImage} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
