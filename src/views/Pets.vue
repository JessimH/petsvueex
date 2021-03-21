<template>
  <div class="pet">
    <h1>{{pet.name}} ({{pet.species}})</h1>
    <p>{{pet.birthYear}}</p>
  </div>
</template>

<script>
import DashBoard from '../components/DashBoard'

export default {
  name: 'Home',
  data: () => {
    return {
      pet: {
        id: null,
        name: null,
        species: null,
        birthYear: null,
      },
    }
  },
  components: {
    DashBoard
  },
  mounted() {
    this.getPet()
  },
  methods:{
    getPet(){
      if(this.$route.params.specie == 'Cat'){
        this.pet = this.$store.getters.cats.find(cat => cat.id == this.$route.params.id);
        // console.log(this.pet)
      }else{
        this.pet = this.$store.getters.dogs.find(dog => dog.id == this.$route.params.id);
        // console.log(this.pet)
      }
    }
  }
}
</script>
