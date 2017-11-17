import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import Loadable from 'react-loadable'

import Layout from 'pages/Layout'
// import Loading from 'components/Loading'

// const Workouts = Loadable({
//     loader: () => import('containers/WorkoutsContainer'),
//     loading: Loading
// })

class Home extends Component {

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Workouts</title>
                </Helmet>
                <div>
                    <h2>Week 1</h2>
                    <div className="week-row">
                        <div className="week-column">
                            <div className="day">
                                <div className="day-name">
                                    Push
                                </div>

                                <div className="day-lifts">
                                    <div className="day-lift">
                                        <div className="day-lift-name">Squat</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                    <div className="day-lift">
                                        <div className="day-lift-name">Rows</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week-column">
                            <div className="day">
                                <div className="day-name">
                                    Push
                                </div>

                                <div className="day-lifts">
                                    <div className="day-lift">
                                        <div className="day-lift-name">Squat</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                    <div className="day-lift">
                                        <div className="day-lift-name">Rows</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week-column">
                            <div className="day">
                                <div className="day-name">
                                    Push
                                </div>

                                <div className="day-lifts">
                                    <div className="day-lift">
                                        <div className="day-lift-name">Squat</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                    <div className="day-lift">
                                        <div className="day-lift-name">Rows</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week-column">
                            <div className="day">
                                <div className="day-name">
                                    Push
                                </div>

                                <div className="day-lifts">
                                    <div className="day-lift">
                                        <div className="day-lift-name">Squat</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                    <div className="day-lift">
                                        <div className="day-lift-name">Rows</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week-column">
                            <div className="day">
                                <div className="day-name">
                                    Push
                                </div>

                                <div className="day-lifts">
                                    <div className="day-lift">
                                        <div className="day-lift-name">Squat</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                    <div className="day-lift">
                                        <div className="day-lift-name">Rows</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week-column">
                            <div className="day">
                                <div className="day-name">
                                    Push
                                </div>

                                <div className="day-lifts">
                                    <div className="day-lift">
                                        <div className="day-lift-name">Squat</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                    <div className="day-lift">
                                        <div className="day-lift-name">Rows</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                        <div className="day-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}

export default Home
