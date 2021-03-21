<template>
  <div class="dogs">
    <h1>Chiens 🐶</h1>
    <table>
      <tr>
        <th>Nom</th>
        <th>Année de naissance</th>
        <th>Espèce</th>
      </tr>
      <tr v-for="dog in dogs" :key='dog.id'>
        <td>
          <router-link :to="{name: 'Pets', params: { specie: dog.species, id: dog.id },}"> {{ dog.name }} </router-link>
        </td>
        <td>{{dog.birthYear}}</td>
        <td>{{dog.species}} 🐶</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Dogs',
  computed: {
      dogs() {
        return this.$store.getters.dogs;
      }
  },
}
</script>
