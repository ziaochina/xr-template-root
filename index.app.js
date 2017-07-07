import * as api from './api'

module.exports = {
    name: 'xr-template-root',
    version: '1.0.0',
    description: 'xr-template-root',
    author: '',
    meta: api.getMeta(),
    load: (cb) => {
        require.ensure([], require => {
            cb(require('./component'), require('./action'), require('./reducer'))
        }, 'xr-template-root')
    }
}
