export const toggleHashChange = (locationHash) => ({
    type: 'HASH_CHANGE',
    locationHash
})

export const myJobsPageLoaded = (payload) => ({
    type: 'MY_JOBS_PAGE_LOADED',
    payload
})

export const asinLifecycleFormSubmitted = (payload) => ({
    type: 'ASIN_LIFECYCLE_FORM_SUBMITTED',
    payload
})

export const asinLifecycleShowSpinner = (payload) => ({
    type: 'ASIN_LIFECYCLE_SHOW_SPINNER',
    payload
})

export const weblabLoaded = (payload) => ({
    type: 'WEBLAB_LOADED',
    payload
})

export const marketplacesLoaded = (payload) => ({
    type: 'MARKETPLACES_LOADED',
    payload
})

export const intentsLoaded = (payload) => ({
    type: 'INTENTS_LOADED',
    payload
})
