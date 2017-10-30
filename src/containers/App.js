import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loadWorkouts } from 'actions'

// import logo from './logo.svg';
import './App.css';

class App extends Component {

    static propTypes = {
        loadWorkouts: PropTypes.func.isRequired,
        workouts: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            api: false,
            isToggleOn: true,
            user: null
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // axios.get('/user').then(function (response) {
        //     this.setState(prevState => ({
        //         user: response.data
        //     }));
        // }.bind(this)).catch(function (error) {
        //     console.log(error);
        // });

        // axios.get('/workouts').then(function (response) {
        //     this.setState(prevState => ({
        //         workouts: response.data
        //     }));
        // }.bind(this)).catch(function (error) {
        //     console.log(error);
        // });

        this.props.loadWorkouts();
    }

    handleClick = (e) => {
        axios.post('/workouts', {
            reps: 123,
            rm_percentage: 123,
            weight: 23
        })
        .then(function (response) {
            console.log(response);
        });

        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
    }

  render() {
    return (
      <div className="App">
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

        <Link to="/test">
            Test
        </Link>

        <div className="section">
            <div className="container">
                {this.props.workouts.data &&
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Workouts</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.workouts.data.map((workout) => (
                            <tr key={workout.id}>
                              <td>{workout.name} / {workout.day}
                                <br />
                                <div>
                                    <strong>Exercises</strong>
                                    <div>
                                        {workout.exercises && workout.exercises.map((exercise) => (
                                            <div key={exercise.id}>{exercise.lift.name}</div>
                                        ))}
                                    </div>
                                </div>
                              </td>
                              <td className="is-right"><a className="button is-dark is-size-7">SEE WORKOUT</a></td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                }
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

const mapStateToProps = (state, ownProps) => ({
    workouts: state.workouts
})

const mapDispatchToProps = {
    loadWorkouts
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
