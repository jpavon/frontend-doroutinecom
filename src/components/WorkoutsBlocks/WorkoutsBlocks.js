import React from 'react'
import classNames from 'classnames'

import Section from 'components/Section'
import Button from 'components/Button'
import Tabs from 'components/Tabs'

import './style.css'

const WorkoutsBlocks = ({children, activeTab, blocks, completedBlocks, create, onSelect}) => (
    <Section title="Training blocks" className="workouts-blocks-container">
        <div className="workouts-blocks">
            <Tabs
                selectedIndex={activeTab}
                onSelect={onSelect}
                tabListClassName={classNames(
                    'workouts-blocks-tab-list',
                    !!completedBlocks[activeTab] && 'workouts-blocks-tab-list--completed'
                )}
                tabClassName="workouts-blocks-tab"
                tabClassNameHighlighted="workouts-blocks-tab--completed"
                selectedTabClassName="workouts-blocks-tab--selected"
                renderTabList={(
                    blocks.map((id) => (
                        <div id={id} completed={completedBlocks[id - 1]}>{id}</div>
                    ))
                )}
                renderTabPanel={(children)}
            />
        </div>

        <div className="workouts-blocks-button-create">
            <Button onClick={create} className="button-small">New Block</Button>
        </div>
    </Section>
)

export default WorkoutsBlocks
