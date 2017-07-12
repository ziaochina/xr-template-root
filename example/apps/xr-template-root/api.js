export function getMeta(){
    return {
        name:'root',
        component:'::div',
        children:{
        	name:'currentApp',
        	component:'AppLoader',
        	appName:'{{data.currentAppName}}',
        	onRedirect:'{{$onRedirect}}',
        	'...': '{{data.currentAppParams}}'
        }
    }
}