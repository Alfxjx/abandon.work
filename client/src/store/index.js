import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		httpState: [],
	},
	mutations: {
		addHttpStatus(state, payload) {
			state.httpState.push(payload);
		},
	},
	actions: {
		addHttpStatus({ commit }) {
			commit("addHttpStatus");
		},
	},
	modules: {},
});
