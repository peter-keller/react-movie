import React, { Component } from "react";

import Card from "../components/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await fetch("../../assets/data.json");
    const jsonResponse = await movies.json();

    if (jsonResponse) {
      this.setState({
        data: jsonResponse,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        {data.map((movie) => (
          <div className="col-sm-2">
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
