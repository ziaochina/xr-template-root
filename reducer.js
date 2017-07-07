import { Map } from 'immutable'

import { reducer as MetaReducer } from 'xr-meta-engine'

class reducer {
    constructor(option) {
        this.metaReducer = option.metaReducer
    }

    init = (state, option) => {
        const data = { data: {currentAppName:'helloWorld'} }
        return this.metaReducer.init(state, data)
    }

    redirect = (state, appName, appProps) =>{
        state = this.metaReducer.sf(state, 'data.currentAppName', appName)
        state = this.metaReducer.sf(state, 'data.currentAppProps', appProps)
        return state
    }
}

export default function creator(option) {
    const metaReducer = new MetaReducer(option),
        o = new reducer({ ...option, metaReducer })

    return { ...metaReducer, ...o }
}