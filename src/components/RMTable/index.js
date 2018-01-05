import React from 'react'

import './style.css'

const values = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45]

const RMTable = ({rm}) => (
    <div className="rm-table">
        <div className="rm-table-col">
            <div className="rm-table-title" title="Rep Max">
                RM
            </div>
            <div className="rm-table-data">
                {values.map((value) => (
                    <div className="rm-table-data-item">
                        {value}% - {(rm*value/100).toFixed(1)}KG
                    </div>
                ))}
            </div>
        </div>
        <div className="rm-table-col">
            <div className="rm-table-title" title="Training Max">
                TM (90%)
            </div>
            <div className="rm-table-data">
                {values.map((value) => (
                    <div className="rm-table-data-item">
                        {value}% - {(rm*(value*90/100)/100).toFixed(1)}KG
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default RMTable
