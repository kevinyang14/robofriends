import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import { robots } from './robots'
import Scroll from '../components/Scroll'
import "./App.css"

 
class App extends React.Component {
    constructor(props) {
        super(props)
        //State are things that can change and describe our App
        this.state = {
            robots: [],
            searchfield:""
        }
        console.log("Constructor...")
    }

    componentDidMount() {
        console.log("ComponentDidMount...")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({robots:users})) 
        //this.setState({robots:robots})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        console.log("Render...")
        const { searchfield, robots } = this.state
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length === 0) {
            return <h1 className = "tc">Loading...</h1>
        } else {
            return (
            <div className="tc">
                <h1 className = "f1">Robo Friends</h1>
                <SearchBox searchChange={ this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
            );
        }
    }
}

export default App