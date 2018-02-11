import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import './style.css'

class Lift  extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            open: true
        }
    }

    render() {
        return (
            <div className="info-container">
                <Button onClick={() => this.setState((prevState) => ({open: !prevState.open}))}>
                    {!this.state.open ?
                        'Show information' :
                        'Hide information'
                    }
                </Button>

                {this.state.open &&
                    <div className="info">
                        <h3 className="info-title">PPL</h3>
                        <div className="info-content">
                            <h2>The program</h2>
                            <p>This program is done 6 days per week, doing each workout twice per week PPLPPLR (P=Pull, P=Push, L=Legs, R=Rest). You can also do the program in this order: PPLRPPLR, this will depend on your weekly schedule.</p>
                            <h2>Main lifts</h2>
                            <p>The first exercise of each routine (Barbell Row, Bench Press and Squat). This are the most important lifts of the program. Increase the weight by 2.5kg or 5lbs each week on this lifts. The starting weight shouldn't be too heavy, start with a weight where you can do 8 reps confortably and do the 5x5 sets.</p>
                            <h2>Accesory lifts</h2>
                            <p>The rest of the exercises. You don't need to increase the weight every week for this lifts. This lifts need to be lightweight comparing to your main lifts and each rep needs to be executed trying to feel the muscle working.</p>
                            <h2>Warmups</h2>
                            <p>3-4 warmups sets are recommended before starting your main lifts. Is also recommended doing light band pull aparts and shoulder dislocations to warmup your shoulders.</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Lift
