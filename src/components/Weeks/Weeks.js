import React from 'react'
import classNames from 'classnames'

import Section from 'components/Section'
import Button from 'components/Button'
import Tabs from 'components/Tabs'

import './style.css'

const Weeks = ({children, activeTab, weeks, completedWeeks, create, onSelect}) => (
    <Section title="Workouts" className="weeks-container">
        <div className="weeks">
            <Tabs
                selectedIndex={activeTab}
                onSelect={onSelect}
                tabListClassName={classNames(
                    'weeks-tab-list',
                    !!completedWeeks[activeTab] && 'weeks-tab-list--completed'
                )}
                tabListInnerClassName="weeks-tab-list-inner"
                tabClassName="weeks-tab"
                tabClassNameHighlighted="weeks-tab--completed"
                selectedTabClassName="weeks-tab--selected"
                renderTabList={(
                    weeks.map((id) => (
                        <div completed={completedWeeks[id - 1]}>{id}</div>
                    ))
                )}
                renderTabPanel={(children)}
            />
        </div>

        <div className="weeks-button-create">
            <Button onClick={create} className="button-small">Add New Week</Button>
        </div>
    </Section>
)

export default Weeks
