import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the children look a bit nicer
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',
    boxShadow: isDragging ? '0 0 4px green' : 'none',
    // styles we need to apply on draggables
    ...draggableStyle,
})
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
})

class DragnDrop extends Component {

    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.node).isRequired,
        updateOrder: PropTypes.func.isRequired
    }

    onDragEnd = (result) => {
        if (!result.destination) {
            return
        }

        const children = reorder(
            this.props.children,
            result.source.index,
            result.destination.index
        )

        // console.log(result)

        this.props.updateOrder({ ids: children.map(item => item.props.id) })
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable
                    droppableId="droppable"
                >
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {this.props.children.map((item) => (
                                <Draggable key={item.props.id} draggableId={item.props.id}>
                                    {(provided, snapshot) => (
                                        <Fragment>
                                            <div
                                                ref={provided.innerRef}
                                                style={getItemStyle(
                                                    provided.draggableStyle,
                                                    snapshot.isDragging
                                                )}
                                                {...provided.dragHandleProps}
                                            >
                                                {item}
                                            </div>
                                            {provided.placeholder}
                                        </Fragment>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default DragnDrop
