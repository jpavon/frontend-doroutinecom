import React from 'react'
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs'

const Tabs = ({renderTabList, renderTabPanel, tabListClassName, tabClassName, selectedTabClassName, ...rest}) => (
    <ReactTabs {...rest}>
        <TabList
            className={tabListClassName}
        >
            {renderTabList.map((item, i) => (
                <Tab
                    key={i}
                    className={tabClassName}
                    selectedClassName={selectedTabClassName}
                >
                    {item}
                </Tab>
            ))}
        </TabList>
        {renderTabPanel.map((item, i) => (
            <TabPanel key={i}>{item}</TabPanel>
        ))}
    </ReactTabs>
)

export default Tabs
