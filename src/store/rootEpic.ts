import { combineEpics } from 'redux-observable'

import exercisesEpics from 'data/exercises/epics'
import liftsEpics from 'data/lifts/epics'
import routinesEpics from 'data/routines/epics'
import setsEpics from 'data/sets/epics'
import uiEpics from 'data/ui/epics'
import userEpics from 'data/user/epics'
import workoutsEpics from 'data/workouts/epics'
import appEpics from 'data/epics'

const rootEpic = combineEpics(
    ...exercisesEpics,
    ...liftsEpics,
    ...routinesEpics,
    ...setsEpics,
    ...uiEpics,
    ...userEpics,
    ...workoutsEpics,
    ...appEpics
)

export default rootEpic
