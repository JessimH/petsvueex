<template>
  <div class="home">
    <h1>Adoptez un animal 🐶🐱</h1>
    <DashBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import DashBoard from '../components/DashBoard'

export default {
  name: 'Home',
  components: {
    DashBoard
  }
}
</script>
