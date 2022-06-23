// hello_algolia.js
import algoliasearch from "algoliasearch";
import "dotenv/config";
import type { PetALG, UserALG } from "../../Types";

// Connect and authenticate with your Algolia app
const client = algoliasearch("K2HBI0ODPX", process.env.ALGOLIA_API_KEY);

// Create a new index
const pets_algolia = client.initIndex("pets");
const users_algolia = client.initIndex("users");

// PETS QUERIES //////////////////////////////////////////////////////////////
// Agrega un nuevo pet
export const newPet_ALG = async (record: any) => {
  try {
    const newPet = await pets_algolia.saveObject(record).wait();
    console.log(newPet);
    return newPet;
  } catch (error) {
    console.log({ algoliaErr: error });
    return error;
  }
};

// Elimina a un Pet
export const delPet_ALG = async (petId: string) => {
  try {
    const petDeleted = await pets_algolia.deleteObject(petId);
    console.log(petDeleted);
    return petDeleted;
  } catch (error) {
    console.log({ algoliaErr: error });
    return error;
  }
};

// VER si poner como variable al radio de distancia
export const petsAround_ALG = async (lat: number, lng: number) => {
  try {
    const { hits } = await pets_algolia.search("", {
      aroundLatLng: [lat, lng].join(","),
      aroundRadius: 2000, // expresado en metros
    });
    return hits;
  } catch (error) {
    console.log({ algoliaErr: error });
    return error;
  }
};

export const petUpdate_ALG = async (data: PetALG) => {
  try {
    const objectID = await pets_algolia.partialUpdateObject(data);
    console.log(objectID);
    return objectID;
  } catch (error) {
    console.log({ algoliaErr: error });
    return error;
  }
};

// USERS queries////////////////////////////////////////////////////////////////

// // Search the index and print the results
// index
//   .search('test_record')
//   .then(({ hits }) => console.log(hits[0]))