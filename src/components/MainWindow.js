import React from 'react'
import PropTypes from 'prop-types'

const MainWindow = ({globalStore}) => (
    <div>
        <h1>MainWindow.js</h1>
        {JSON.stringify(globalStore)}
    </div>
)

MainWindow.propTypes = {
    globalStore: PropTypes.object.isRequired,
}

export default MainWindow