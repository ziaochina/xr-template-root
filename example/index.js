import { config, start, componentFactory } from 'xr-meta-engine'
import myConfig  from './config'

import about from './apps/xr-template-root/apps/about/index.js'
import helloWorld from './apps/xr-template-root/apps/helloWorld/index.js'
import xr_template_root from './apps/xr-template-root/index.js'

const apps = {
	[about.name]:about,	
	[helloWorld.name]:helloWorld,	
	[xr_template_root.name]:xr_template_root,	
}


config(myConfig({apps}))


import * as xrComponents from 'xr-component'

Object.keys(xrComponents).forEach(key=>{
	componentFactory.registerComponent(key, xrComponents[key])
})
	

start()