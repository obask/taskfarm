import React from 'react'
import PropTypes from 'prop-types'

const SideMenu = ({locationHash, globalStore}) => (
    <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
            <li className={(locationHash === '#inbox') ? 'active' : ''}>
                <a href="#inbox">Inbox</a>
            </li>
            <li className={(locationHash === '#upload') ? 'active' : ''}>
                <a href="#upload">Upload</a>
            </li>
            <li className={(locationHash === '#download') ? 'active' : ''}>
                <a href="#download">Download</a>
            </li>

        </ul>
    </div>
)

SideMenu.propTypes = {
    locationHash: PropTypes.string.isRequired,
    globalStore: PropTypes.object.isRequired,
}

export default SideMenu
