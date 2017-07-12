var _options

function config(options) {
	_options = options
	_options.targetDomId = 'app'
	_options.startAppName = 'xr-template-root' //xr-template-root
	options.apps['xr-template-root'].config({defaultAppName:'about'})

	return _options
}

config.getCurrent = () => _options

export default config