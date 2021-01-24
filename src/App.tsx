import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import { Monster } from './interfaces'

type Props = {

}

type State = {
  monsters: Monster[]
  searchField: string,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState({monsters: users}))
  }

  render() {
    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
