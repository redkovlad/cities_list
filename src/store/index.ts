import { ComponentCustomProperties } from 'vue'
import { createStore, Store } from 'vuex';
import { citiesDataInterface } from '@/interfaces/citiesData.ts';

import { citiesData, citiesLetters } from './parseCitiesData';

declare module '@vue/runtime-core' {
	interface State {
		citiesData:citiesDataInterface,
		letters:Set<string>

	}
	interface ComponentCustomProperties {
		$store: Store<State>
	}
}

export default createStore({
	state: {
		citiesData:citiesData,
		letters:citiesLetters
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
