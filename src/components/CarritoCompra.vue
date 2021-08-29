<template>
  <div>
    <h1>Carrito de Compras</h1>
    <table class="table mx-4">
      <thead>
        <tr class="table-info">
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Categoría</th>
          <th scope="col">Color</th>
          <th scope="col">Oferta</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, $index) in $store.state.carritoDeCompras" :key="$index">
          <!--  <th>{{ $index + 1 }}</th> -->
          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.color }}</td>
          <td>{{ product.oferta ? `${product.descuento}%` : '' }}</td>
          <td>
            <button class="btn btn-primary" @click="$store.dispatch('restarCantidadEnCarrito', $index)">-</button>
            {{ product.qty }}
            <button class="btn btn-primary" @click="$store.dispatch('agregarCantidadEnCarrito', $index)">+</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="text-right font-weight-bold h4 mr-5" v-if="$store.state.carritoDeCompras.length > 0">
      El total de tu carrito de compras es: {{ $store.getters['totalCarrito'] }}
    </p>
    <p class="text-right font-weight-bold h4 mr-5" v-else>Aún no tienes productos en tu carrito :D</p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
