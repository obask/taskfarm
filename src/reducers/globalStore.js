const _navBarInfoInitialState = {
    selectedMarketplace: "DSADSA",
    domainSelectorInfo: {
        currentDomain: "DMIOASMD",
        domainEndpointMap: "DSADSA",
    },
}

const globalStore = (state = _navBarInfoInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default globalStore
