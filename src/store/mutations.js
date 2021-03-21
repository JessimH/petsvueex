export const addPet = (state, pet) => {
  state.pets.push(pet)
  if (pet.species == 'Dog') {
    state.dogs.push(pet)
  } else {
    state.cats.push(pet)
  }
};
