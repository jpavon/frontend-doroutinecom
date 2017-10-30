import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loadWorkouts } from 'workouts/actions'

import './style.css'

class WorkoutsContainer extends Component {

    static propTypes = {
        loadWorkouts: PropTypes.func.isRequired,
        workouts: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.loadWorkouts();
    }

    handleClick = (e) => {

    }

    render() {
        return (
          <div className="workouts">

            <Link to="/lifts">
                Lifts
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer))
