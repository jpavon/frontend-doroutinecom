import * as moment from 'moment'
// import 'moment/locale/en-gb'
import store from 'store'

moment.updateLocale('en', {
    week: {
        dow: store.get('startOfWeek') === 'monday' ? 1 : 0,
        doy: 4
    }
})

export default moment
