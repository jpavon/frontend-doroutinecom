import React, { Fragment } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Select from 'components/AutoSaveForm/Select'
import Label from 'components/Form/Label'
import Button from 'components/Button'

import './style.css'

const tabs = ['Workouts', 'Lifts', 'Options']

const RoutineSingle = ({children, routine, update, remove, lifts, weeks}) => (
    <div className="routine-single">
        <Tabs>
            <TabList className="routine-single-tablist">
                {tabs.map((name, i) => (
                    <Tab
                        className="routine-single-tab"
                        key={i}
                    >
                        {name}
                    </Tab>
                ))}
            </TabList>
            <div className="routine-single-tabpanel">
                <TabPanel>
                    {weeks}
                </TabPanel>
                <TabPanel>
                    {lifts}
                </TabPanel>
                <TabPanel>
                    <AutoSaveForm
                        initialValues={routine}
                        update={update}
                        render={({values}) => (
                            <Fragment>
                                <div className="routine-settings">
                                    <div className="routine-settings-item">
                                        <Label htmlFor={`weightMeasure${values.id}`}>Weight</Label>
                                        <Select
                                            id={`weightMeasure${values.id}`}
                                            name="weightMeasure"
                                            options={[
                                                {id: 'kg', name: 'kg'},
                                                {id: 'lbs', name: 'lbs'},
                                            ]}
                                        />
                                    </div>
                                    <div className="routine-settings-item">
                                        <Label htmlFor={`trainingMax${values.id}`} title="Training Max">TM Info</Label>
                                        <Select
                                            id={`trainingMax${values.id}`}
                                            name="trainingMax"
                                            options={[
                                                {id: '100', name: '100%'},
                                                {id: '95', name: '95%'},
                                                {id: '90', name: '90%'},
                                                {id: '85', name: '85%'},
                                                {id: '80', name: '80%'},
                                                {id: '75', name: '75%'}
                                            ]}
                                        />
                                    </div>
                                    {/*<div className="routine-settings-item">
                                        <Label htmlFor={`precision${values.id}`}>Precision</Label>
                                        <Select
                                            id={`precision${values.id}`}
                                            name="precision"
                                            options={[
                                                {id: '5', name: '5'},
                                                {id: '2.5', name: '2.5'},
                                                {id: '0.5', name: '0.5'},
                                            ]}
                                        />
                                    </div>*/}
                                </div>
                                <div className="routine-single-title">
                                    <Label htmlFor={`name${values.id}`}>Title</Label>
                                    <Input
                                        id={`name${values.id}`}
                                        name="name"
                                        size="large"
                                    />
                                </div>
                            </Fragment>
                        )}
                    />
                </TabPanel>
            </div>
        </Tabs>
        <div className="routine-single-button-remove">
            <Button danger onClick={remove}>Delete routine</Button>
        </div>
    </div>
)

export default RoutineSingle
