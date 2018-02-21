import PropTypes from 'prop-types'

import {
    STATUS_NONE,
    STATUS_LOADING,
    STATUS_LOADED,
    STATUS_FAILED,
    STATUS_UPDATING,
    STATUS_DELETING
} from 'data/utils'

export const StatusType = PropTypes.oneOf([
    STATUS_NONE,
    STATUS_LOADING,
    STATUS_LOADED,
    STATUS_FAILED,
    STATUS_UPDATING,
    STATUS_DELETING
])
