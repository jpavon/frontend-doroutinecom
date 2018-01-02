import React from 'react'

import Section from 'components/Section'
import Button from 'components/Button'
import Tabs from 'components/Tabs'

import './style.css'

const WorkoutsBlocks = ({children, blocks, handleCreate}) => (
    <Section title="Training blocks" className="workouts-blocks-container">
        <div className="workouts-blocks">
            <Tabs
                tabListClassName="workouts-blocks-tab-list"
                tabClassName="workouts-blocks-tab"
                selectedTabClassName="workouts-blocks-tab--selected"
                renderTabList={(
                    blocks.map((blockId) => (
                        <div>{blockId}</div>
                    ))
                )}
                renderTabPanel={(children)}
            />
        </div>

        <div className="workouts-blocks-button-create">
            <Button onClick={handleCreate} className="button-small">New Block</Button>
        </div>
    </Section>
)

export default WorkoutsBlocks
