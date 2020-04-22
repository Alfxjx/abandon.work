import Loading from './loading.vue';
// 来保持实例，单例模式
let instance;
let el;

Loading.install = function(Vue, options) {
	Vue.prototype.$loading = {
		show() {
			if (!instance) {
				let LoadingInstance = Vue.extend(Loading);
				el = document.createElement('div');
				document.body.appendChild(el);
				let Profile = new LoadingInstance();
				if (options) {
					if (options.hint) {
						Profile.hint = options.hint;
					}
				}
				instance = Profile.$mount(el);
			} else {
				return instance;
			}
		},
		hide() {
			if (instance) {
				document.body.removeChild(document.getElementById('loading-wrapper'));
				instance = undefined;
			}
		},
	};
};

export default Loading;
