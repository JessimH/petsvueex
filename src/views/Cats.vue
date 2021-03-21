<template>
  <div class="cats">
    <h1>Chats 🐱</h1>
    <table>
      <tr>
        <th>Nom</th>
        <th>Année de Naissance</th>
        <th>Espèce</th>
      </tr>
      <tr v-for="cat in cats" :key='cat.index'>
        <td><router-link :to="{name: 'Pets', params: { specie: cat.species, id: cat.id },}"> {{ cat.name }} </router-link>
        </td>
        <td>{{cat.birthYear}}</td>
        <td>{{cat.species}} 🐱</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Cat',
  computed: {
      cats() {
        return this.$store.getters.cats;
      }
  },
}
</script>