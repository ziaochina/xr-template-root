import {
	config,
	start,
} from 'xr-meta-engine'

import _src from '../index.app'
import _src_apps_about from '../apps/about/index.app'
import _src_apps_helloWorld from '../apps/helloWorld/index.app'

config({
	apps: {
		[_src_apps_about.name]: _src_apps_about,
		[_src_apps_helloWorld.name]: _src_apps_helloWorld,
		[_src.name]: _src
	},
	targetDomId:'app',
	startAppName:'xr-template-root',
})

start()