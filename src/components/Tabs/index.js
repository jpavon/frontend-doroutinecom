import React from 'react'
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs'

import './style.css'

const Tabs = ({renderTabList, renderTabPanel, ...rest}) => (
    <ReactTabs {...rest}>
        <TabList>
            {renderTabList.map((item, i) => (
                <Tab key={i}>{item}</Tab>
            ))}
        </TabList>
        {renderTabPanel.map((item, i) => (
            <TabPanel key={i}>{item}</TabPanel>
        ))}
    </ReactTabs>
)

export default Tabs
