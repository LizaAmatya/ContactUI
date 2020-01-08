import React from "react";
import List from "./components/List";
import Profile from "./components/Profile";

function withHeader(Component) {
  return function(props) {
    return (
      <div className="header">
        {props.activePage ? (
          ""
        ) : (
          <button onClick={props.onBackClick}>Back</button>
        )}
        <h1>People</h1>
      </div>
    );
  };
}

const EnhancedList = withHeader();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      activePage: true
    };
  }

  componentDidMount() {
    fetch("https://mock-io.herokuapp.com/users")
      .then(response => response.json())
      .then(response =>
        this.setState({
          users: response
        })
      )
      .catch(e => console.log(e));
  }

  onContactClick = index => {
    this.setState({
      activePage: false,
      activeIndex: index
    });
  };

  onBackClick = () => {
    this.setState({
      activePage: true,
      activeIndex: undefined
    });
  };

  render() {
    return (
      <div className="App">
        <EnhancedList
          activePage={this.state.activePage}
          onBackClick={this.onBackClick}
        />
        {this.state.activePage ? (
          this.state.users.map((user, index) => (
            <List
              onContactClick={this.onContactClick}
              index={index}
              key={index}
              username={user.firstName}
              userlastname={user.lastName}
              profilepic={user.profileImage}
            />
          ))
        ) : (
          <Profile index={this.state.users[this.state.activeIndex]} />
        )}
      </div>
    );
  }
}

export default App;
