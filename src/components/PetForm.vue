<template>
    <div>
        <div class="form">
            <label for="name">Name:</label>
            <input type="text" name="name" placeholder="Enter name" v-model="pet.name">
            <label for="pets">Choose species:</label>
            <select name="pets" id="pet-select" v-model="pet.species">
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
            </select>
            <label for="birthYear">BirthYear:</label>
            <input type="number" name="birthYear" placeholder="2021" v-model="pet.birthYear">
            <input @click="addPet" type="submit" value="Submit">
        </div>
    </div>
</template>
<script>
export default {
    name: "PetForm",
    data: () => {
        return{
            pet: {
                id: null,
                name: null,
                species: null,
                birthYear: null,
            },
        }
    },
    methods: {
        addPet(){
            this.pet.id = Math.floor(Math.random() * (100 - this.countPets) + 1)
            // console.log(this.pet.id)
            this.$store.commit("addPet", this.pet);
        }
    },
    computed: {
        countPets() {
            return this.$store.getters.countPets;
        }
  },
}
</script>