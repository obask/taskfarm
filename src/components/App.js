import React from 'react'
import PropTypes from 'prop-types'
import SideMenu from './SideMenu'
import MainWindow from './MainWindow'

const App = ({locationHash, globalStore, activeTabStore}) => (
    React.createElement('div', {className:"container center body-content-wrapper"},
        React.createElement(SideMenu, {
            locationHash: locationHash,
            globalStore: globalStore,
        }),
        React.createElement("hr"),
        function () {
            switch (locationHash) {
                case "#inbox":
                    return React.createElement(MainWindow, {globalStore: globalStore, activeTabStore: activeTabStore})
                // case "#download":
                //     return React.createElement(DownloadTab, downloadTabStore)
                default:
                    return <h1>TODO: implement this tab: {locationHash}</h1>
            }
        }()
    )
)

App.propTypes = {
    locationHash: PropTypes.string.isRequired,
    globalStore: PropTypes.object.isRequired,
    activeTabStore: PropTypes.object.isRequired,
}

export default App
