import React from 'react'
import classNames from 'classnames'
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs'

const Tabs = ({renderTabList, renderTabPanel, tabListClassName, tabListInnerClassName, tabClassName, tabClassNameHighlighted, selectedTabClassName, selectedIndex, onSelect}) => (
    <ReactTabs
        selectedIndex={selectedIndex}
        onSelect={onSelect}
    >
        <div className={tabListClassName}>
            <TabList
                className={tabListInnerClassName}
            >
                {renderTabList.map((item, i) => (
                    <Tab
                        key={i}
                        className={classNames(
                            tabClassName,
                            item.props.completed && tabClassNameHighlighted
                        )}
                        selectedClassName={selectedTabClassName}
                    >
                        {item}
                    </Tab>
                ))}
            </TabList>
        </div>
        {renderTabPanel.map((item, i) => (
            <TabPanel key={i}>{item}</TabPanel>
        ))}
    </ReactTabs>
)

export default Tabs
