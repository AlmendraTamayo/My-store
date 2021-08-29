<template>
  <div>
    <!-- <ul>
      <li v-for="(product, $index) in $store.state.productList" :key="$index">
        {{ product }}
      </li>
    </ul> -->
    <table class="table table-striped mx-4">
      <thead>
        <tr class="table-success">
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Categoría</th>
          <th scope="col">Color</th>
          <th scope="col">Oferta</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, $index) in $store.state.productList" :key="$index">
          <!--  <th>{{ $index + 1 }}</th> -->
          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.color }}</td>
          <td>{{ product.oferta ? `${product.descuento}%` : '' }}</td>
          <td>
            <button class="btn btn-success" @click="agregarProductoAlCarrito(product)">Agregar al carrito</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  methods: {
    async agregarProductoAlCarrito(product) {
      await this.$store.dispatch('agregarProductoAlCarrito', product)
    },
  },
}
</script>

<style></style>
