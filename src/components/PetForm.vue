<template>
    <div>
        <p v-if="message">{{message}}</p>
        <div class="form">
            <label for="name">Nom:</label>
            <input type="text" name="name" placeholder="Enter name" v-model="pet.name">
            <label for="pets">Choisissez une espèce:</label>
            <select name="pets" id="pet-select" v-model="pet.species">
                <option value="Dog">Chien🐶</option>
                <option value="Cat">Chat🐱</option>
            </select>
            <label for="birthYear">Année de naissance:</label>
            <input type="number" name="birthYear" placeholder="2021" v-model="pet.birthYear">
            <input @click="addPet" type="submit" value="Ajouter un nouvel animal">
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
            message: null
        }
    },
    methods: {
        addPet(){
            if(this.pet.name == null || this.pet.species == null || this.pet.birthYear == null){
                this.message = "remplissez tout les champs !"
            }else{
                this.pet.id = Math.floor(Math.random() * (100 - this.countPets) + 1)
                // console.log(this.pet.id)
                this.$store.commit("addPet", this.pet);
                this.message = "votre compagnon à été ajouté"
            }
        }
    },
    computed: {
        countPets() {
            return this.$store.getters.countPets;
        }
  },
}
</script>