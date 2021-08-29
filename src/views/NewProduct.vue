<template>
  <!-- <form @submit.prevent="nuevoProducto">
    <label> Nombre Producto </label>
    <input type="text" v-model="form.name" required />
    <br />
    <label for="">Precio del producto </label>
    <input type="number" v-model.number="form.price" required />
    <br />
    <label for="">Categoría</label>
    <select v-model="form.category" required>
      <option value="Home-Office">Home Office</option>
      <option value="Vacations">Vacaciones</option>
      <option value="Transport">Transporte</option>
      <option value="Other">Otro</option>
    </select>
    <br />
    <label for="">Color</label>
    <input type="color" v-model="form.color" />
    <br />
    <label for="">Oferta</label>
    <input type="checkbox" v-model="form.oferta" />
    <input type="number" min="1" max="100" v-model="form.descuento" v-if="form.oferta" required />
    <br />
    <button type="submit">Guardar</button>
  </form> -->
  <form @submit.prevent="nuevoProducto" class="mx-5">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Nombre Producto</label>
        <input type="text" v-model="form.name" required class="form-control" />
      </div>
      <div class="form-group col-md-6">
        <label>Categoría</label>
        <select v-model="form.category" required class="form-control">
          <option value="Home-Office">Home Office</option>
          <option value="Vacations">Vacaciones</option>
          <option value="Transport">Transporte</option>
          <option value="Other">Otro</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-4">
        <label>Precio del producto</label>
        <input type="number" v-model.number="form.price" required class="form-control" />
      </div>
      <div class="form-group col-md-2">
        <label>Color</label>
        <input type="color" v-model="form.color" class="form-control" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-2">
        <label for="" class="mr-3">Oferta </label>

        <input type="checkbox" v-model="form.oferta" class="form-check-label" />
        <input
          type="number"
          min="1"
          max="100"
          v-model="form.descuento"
          v-if="form.oferta"
          required
          class="form-control"
        />
      </div>
    </div>

    <div class="form-group"></div>
    <button type="submit" class="btn btn-success">Guardar</button>
  </form>
</template>

<script>
export default {
  name: 'NewProduct',
  data: () => ({
    form: { name: '', price: null, category: '', color: '#000000', oferta: false, descuento: null },
  }),
  methods: {
    async nuevoProducto() {
      await this.$store.dispatch('agregarProducto', this.form)
      this.$router.push('/productos')
    },
  },
}
</script>

<style></style>
