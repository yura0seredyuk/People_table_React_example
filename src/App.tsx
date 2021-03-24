import React from "react";
import peopleFromServer from "../public/api/people.json";
import { PeopleTable } from "./PeopleTable";

const activeColor = "purple";

export class App extends React.Component {
  state = {
    query: "Ha",
    people: peopleFromServer,
    sortBy: "name"
  };

  sort = (sortBy: string) => () => {
    this.setState({
      sortBy
    });
  };

  render() {
    const { sortBy, people, query } = this.state;

    const filteredPeople = people.filter((person) =>
      person.name.includes(query)
    );

    filteredPeople.sort((prev, next) => {
      switch (sortBy) {
        case "name":
          return prev.name.localeCompare(next.name);

        case "born":
          return prev.born - next.born;

        case "sex":
          return prev.sex.localeCompare(next.sex);
      }
    });

    return (
      <div className="App">
        <h1>People table</h1>

        <input
          type="text"
          value={this.state.query}
          placeholder="Filter people"
          onChange={(event) =>
            this.setState({
              query: event.target.value
            })
          }
        />

        <button
          style={sortBy === "born" ? { borderColor: activeColor } : {}}
          type="button"
          onClick={this.sort("born")}
        >
          Sort by born year
        </button>

        <button
          style={sortBy === "name" ? { borderColor: activeColor } : {}}
          name="name"
          type="button"
          onClick={this.sort("name")}
        >
          Sort by name
        </button>

        <button
          style={sortBy === "sex" ? { borderColor: activeColor } : {}}
          type="button"
          onClick={this.sort("sex")}
        >
          Sort by sex
        </button>

        <PeopleTable people={filteredPeople} />
      </div>
    );
  }
}
