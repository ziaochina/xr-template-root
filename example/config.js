var _options

function config(options) {
	_options = options
	_options.targetDomId = 'app'
	_options.startAppName = 'xr-template-root'

	options.apps['xr-template-root'].config({defaultAppName:'helloWorld'})

	return _options
}

config.getCurrent = () => _options

export default config