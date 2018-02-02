import Moment from 'moment'
import { extendMoment } from 'moment-range'
import 'moment/locale/en-gb'

const moment = extendMoment(Moment)

moment.updateLocale('en', {
    week: {
        dow: localStorage.getItem('dayOfMonth') === 'monday' ? 1 : 0
    }
})

export default moment
