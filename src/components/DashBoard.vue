<template>
    <div>
        <h2>DashBord</h2>
        <div>
            <p>{{countPets}} anim{{ countPets > 1 ? 'aux' : 'al'}} dans la base de données</p>
            <ul>
                <li>{{countCats}} chat{{countCats > 1 ? 's' : ''}} 🐱</li>
                <li>{{countDogs}} chien{{countDogs > 1 ? 's' : ''}} 🐶</li>
            </ul>
            <button @click="toggleForm">{{formBoolean ? 'close form' : 'Add new pet'}}</button>
        </div>
        <PetForm 
            v-if="formBoolean"
        />
    </div>
</template>
<script>
import PetForm from './PetForm'
export default {
    name: "DashBoard",
    components: {
        PetForm
    },
    data: () => {
        return{
            formBoolean: false,
        }
    },
    methods: {
        toggleForm(){
            // console.log(this.newpet)
            this.formBoolean = !this.formBoolean
        }
    },
    computed: {
        pets() {
        return this.$store.getters.pets;
        },
        countPets() {
        return this.$store.getters.countPets;
        },
        countDogs() {
        return this.$store.getters.countDogs;
        },
        countCats() {
        return this.$store.getters.countCats;
        },
  },
}
</script>
<style lang="css">
    .form{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }
</style>