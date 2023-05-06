import { faker } from "@faker-js/faker/locale/en";

// This file has nothing to do with Redux
// It exports functions that create random words

export const createRandomWords = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`
}

