import Moment from 'moment'
import { extendMoment } from 'moment-range'
// import 'moment/locale/en-gb'
import store from 'store'

const moment = extendMoment(Moment)

moment.updateLocale('en', {
    week: {
        dow: store.get('startOfWeek') === 'monday' ? 1 : 0
    }
})

export default moment
