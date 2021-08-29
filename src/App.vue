<template>
  <div id="app">
    <div id="nav">
      <h6>
        <router-link to="/productos">Productos</router-link> |
        <router-link to="/newproduct">Nuevo Producto</router-link> |
        <router-link to="/busqueda">Búsqueda</router-link> |
      </h6>
    </div>
    <router-view />
    <hr />
    <CarritoCompra />
  </div>
</template>

<script>
import CarritoCompra from '@/components/CarritoCompra.vue'
export default {
  name: 'App',
  components: { CarritoCompra },
}
</script>
