import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const MainWindow = ({globalStore, activeTabStore}) => (
    <div>
        <h1>MainWindow</h1>
        {JSON.stringify(globalStore)}
        <hr/>
        <ul>
            {activeTabStore.items.map((x, i) =>
                React.createElement(TodoItem, {
                    key: i,
                    breadcrumbs: i,
                    ...activeTabStore.items[i]
                })
            )}
        </ul>
    </div>
)

MainWindow.propTypes = {
    globalStore: PropTypes.object.isRequired,
    activeTabStore: PropTypes.object.isRequired,
}

export default MainWindow
