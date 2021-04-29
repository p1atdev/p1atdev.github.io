import { wrapFunctional } from './utils'

export { default as DarkToggleButton } from '../../components/DarkToggleButton.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyDarkToggleButton = import('../../components/DarkToggleButton.vue' /* webpackChunkName: "components/dark-toggle-button" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
