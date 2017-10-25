import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api: false,
            isToggleOn: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

  componentDidMount() {
    axios.get('http://192.168.10.10')
      .then(function (response) {
        this.setState(prevState => ({
              api: true
            }));
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClick = (e) => {
    this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
        Show
      </button>
        {this.state.api && <span>ON</span> || <span>OFF</span>}
        {!this.state.isToggleOn && <div>Mia</div>}

        <nav className="navbar is-dark" aria-label="main navigation">
          <div className="navbar-brand">
              <a className="navbar-item">
                  <img src="http://watchosicongallery.com/img/1024/workout-tracker-gymatic-exercise-routines-gym-log-2017.png" width="28" height="28" alt="Bulma" />
              </a>
          </div>
          <div className="navbar-menu">
              <div className="navbar-end">
                  <a className="navbar-item is-size-7">
                    <strong>WORKOUTS</strong>
                  </a>
                  <a className="navbar-item is-size-7">
                    <strong>GRAPHS</strong>
                  </a>
                  <a className="navbar-item is-size-7">
                    <strong>SETTINGS</strong>
                  </a>
              </div>
          </div>
        </nav>

        <div className="section">
            <div className="container">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Workouts</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Day 1</td>
                    <td className="is-right"><a className="button is-dark is-size-7">SEE WORKOUT</a></td>
                  </tr>
                  <tr>
                    <td>Day 2</td>
                    <td className="is-right"><a className="button is-dark is-size-7">SEE WORKOUT</a></td>
                  </tr>
                  <tr>
                    <td>Day 3</td>
                    <td className="is-right"><a className="button is-dark is-size-7">SEE WORKOUT</a></td>
                  </tr>
                  <tr>
                    <td>Day 4</td>
                    <td className="is-right"><a className="button is-dark is-size-7">SEE WORKOUT</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>

        <div className="section">
            <div className="container">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Day 1</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Incline bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Dumbell flies</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Close grip bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                </tbody>
              </table>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Day 2</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Incline bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Dumbell flies</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Close grip bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                </tbody>
              </table>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Day 3</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Incline bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Dumbell flies</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                  <tr>
                    <td>Close grip bench press</td>
                    <td>4x10</td>
                    <td className="is-green">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>

        <br/><br/>

        <div className="is-center">
            <img src="http://www.jqueryscript.net/images/JavaScript-Charts-With-SVG-xCharts.jpg" alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
