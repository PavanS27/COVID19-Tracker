import React, { Component } from "react";
import { Cards, Charts, Country } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt="covid19"
          src="https://www.nsmedicaldevices.com/wp-content/uploads/sites/2/2020/03/599px-2019-nCoV-CDC-23312_without_background-740x520.png"
        />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
