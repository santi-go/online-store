import { productGetters, manufacturerGetters } from './getters'

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: []
  },
  // GETTERS
  getters: Object.assign({}, productGetters, manufacturerGetters)
})

export const productGetters = {
  // All products
  allProducts: (state, getters) => {
    return state.products
  },
  // Get Product by ID
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p._id === id)[0]
    } else {
      return state.product
    }
  },
}

export const manufacturerGetters = {
  // All manufacturers
  allManufacturers: state => state.manufacturers
}
