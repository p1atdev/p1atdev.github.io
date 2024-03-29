import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  DarkToggleButton: () => import('../../components/DarkToggleButton.vue' /* webpackChunkName: "components/dark-toggle-button" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
