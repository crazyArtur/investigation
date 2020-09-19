import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    console.log(data.results);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.people.length ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.people.map(person => (
              <React.Fragment key={person.name.first + person.name.last}>
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large} alt={"Pic missing"} />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }
}
