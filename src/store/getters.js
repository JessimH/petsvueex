export const pets = (state) => {
  return state.pets;
};

export const dogs = (state) => {
  return state.dogs;
};

export const cats = (state) => {
  return state.cats;
};

export const countPets = (state) => {
  return state.pets.length;
};

export const countDogs = (state) => {
  return state.dogs.length;
};

export const countCats = (state) => {
  return state.cats.length;
};
