import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { toggleHashChange } from './actions'
import appStore from './appStore'

ReactDOM.render(<App />, document.getElementById('root'));


const defaultController = function () {
    if (window.location.hash === "") {
        window.location.hash = "#inbox"
    } else if (
        window.location.hash === "#inbox" ||
        window.location.hash === "#upload" ||
        window.location.hash === "#download"
    ) {
        appStore.dispatch(toggleHashChange(window.location.hash))
    } else {
        throw Error("no route for this URL: " + window.location.hash)
    }
}

window.addEventListener('hashchange', function () {
    console.log("URL:", window.location.hash);
    defaultController();
});

appStore.subscribe(() => {
    console.log(appStore.getState())
    ReactDOM.render(
        React.createElement(App, appStore.getState()),
        document.getElementById('root')
    )
})

defaultController()
