<template>
  <div>
    <h1>Búsquedas</h1>
    <div class="form-group col-md-6">
      <label for="" class="mr-3">Filtro por Nombre</label>
      <input
        type="text"
        placeholder="Nombre"
        :value="$store.state.busquedaPorNombre"
        @input="$store.commit('SET_BUSQUEDA_NOMBRE', $event.target.value)"
        class="form-control"
      />
    </div>

    <!-- <ul>
      <li v-for="(producto, $Index) in $store.getters.productosFiltrados" :key="$Index">
        {{ producto }}
      </li>
    </ul> -->
    <table class="table table-dark mx-4">
      <tbody>
        <tr v-for="(product, $index) in $store.getters.productosFiltrados" :key="$index">
          <!--  <th>{{ $index + 1 }}</th> -->
          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.color }}</td>
          <td>{{ product.oferta ? `${product.descuento}%` : '' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
