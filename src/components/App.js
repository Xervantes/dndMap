import React, {Component} from 'react';
import firstMap from '../cragmaw_Hideout.jpg'
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import NavBar from './NavBar';
import BattleMaps from './BattleMaps'
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            battleMaps: []
        };
    }

    async componentDidMount() {
        const res = await axios.get('/battleMaps.json');
        this.setState({
            battleMaps: res.data
        });
    }

    render() {
        return (
            <Router>
                <section style={{width: '100%'}}>
                    <NavBar/>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/battleMaps"
                               render={(props) => <BattleMaps {...props} battleMaps={this.state.battleMaps}/>}/>
                        {/*<img src={firstMap} className="map" alt="logo" />*/}
                    </div>
                </section>
            </Router>
        );
    }
}

export default App;
