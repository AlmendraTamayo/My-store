import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const delay = (ms) => async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default new Vuex.Store({
  state: {
    busquedaPorNombre: '',
    busquedaPorCategoria: '',
    productList: [
      { name: 'Casa', price: 100, color: 'white', category: 'Home-Office', oferta: false, descuento: 0 },
      { name: 'Bote', price: 100, color: 'black', category: 'Vacations', oferta: false, descuento: 0 },
      { name: 'Avión', price: 100, color: 'white', category: 'Vacations', oferta: false, descuento: 0 },
      { name: 'Motocicleta', price: 100, color: 'red', category: 'Transport', oferta: false, descuento: 0 },
      { name: 'Computadora', price: 100, color: 'gray', category: 'Home-Office', oferta: true, descuento: 30 },
      { name: 'Silla', price: 100, color: 'pink', category: 'Home-Office', oferta: false, descuento: 0 },
      { name: 'Espejo', price: 100, color: 'white', category: 'Other', oferta: false, descuento: 0 },
      { name: 'Mesa', price: 100, color: 'black', category: 'Home-Office', oferta: false, descuento: 0 },
      { name: 'Café', price: 100, color: 'black', category: 'Other', oferta: false, descuento: 0 },
      { name: 'Bicicleta', price: 100, color: 'red', category: 'Transport', oferta: false, descuento: 0 },
      { name: 'Gato', price: 100, color: 'white', category: 'Other', oferta: false, descuento: 0 },
      { name: 'Parlante', price: 100, color: 'gray', category: 'Home-Office', oferta: false, descuento: 0 },
      { name: 'Plancha', price: 100, color: 'white', category: 'Other', oferta: false, descuento: 0 },
      { name: 'Libro', price: 100, color: 'red', category: 'Home-Office', oferta: true, descuento: 50 },
    ],
    carritoDeCompras: [],
  },
  getters: {
    totalCarrito(state) {
      return state.carritoDeCompras.reduce((accumulator, producto) => {
        accumulator = accumulator + (producto.price - (producto.price * producto.descuento) / 100) * producto.qty
        return accumulator
      }, 0)
    },
    productosFiltrados(state) {
      return state.productList.filter((producto) => producto.name === state.busquedaPorNombre)
    },
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.productList.push(newProduct)
    },
    ADD_PRODUCT_TO_CARRITO(state, newProduct) {
      state.carritoDeCompras.push(newProduct)
    },
    ADD_CANTIDAD_CARRITO(state, productIndex) {
      state.carritoDeCompras[productIndex].qty++
    },
    SUBSTRACT_CANTIDAD_CARRITO(state, productIndex) {
      state.carritoDeCompras[productIndex].qty--
    },
    REMOVE_PRODUCT_CARRITO(state, productIndex) {
      state.carritoDeCompras.splice(productIndex, 1)
    },
    SET_BUSQUEDA_NOMBRE(state, value) {
      state.busquedaPorNombre = value
    },
  },
  actions: {
    async agregarProducto(context, newProduct) {
      await delay(2000)
      context.commit('ADD_PRODUCT', { ...newProduct })
    },
    async agregarProductoAlCarrito(context, newProduct) {
      await delay(1000)
      const productoIndexEnElCarrito = context.state.carritoDeCompras.findIndex((product) => {
        return (
          product.name === newProduct.name &&
          product.category === newProduct.category &&
          product.price === newProduct.price &&
          product.color === newProduct.color &&
          product
        )
      })

      if (productoIndexEnElCarrito >= 0) {
        context.commit('ADD_CANTIDAD_CARRITO', productoIndexEnElCarrito)
        /*  console.log(productoIndexEnElCarrito) */
      } else {
        context.commit('ADD_PRODUCT_TO_CARRITO', { ...newProduct, qty: 1 })
      }
    },

    async agregarCantidadEnCarrito(context, productIndex) {
      await delay(1000)
      context.commit('ADD_CANTIDAD_CARRITO', productIndex)
    },
    async restarCantidadEnCarrito(context, productIndex) {
      await delay(1000)
      console.log(productIndex)
      if (context.state.carritoDeCompras[productIndex].qty >= 2) {
        context.commit('SUBSTRACT_CANTIDAD_CARRITO', productIndex)
      } else {
        context.commit('REMOVE_PRODUCT_CARRITO', productIndex)
      }
    },
  },
  modules: {},
})
