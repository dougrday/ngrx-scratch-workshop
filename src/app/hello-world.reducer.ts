import { createReducer, on } from '@ngrx/store';
import * as HelloWorldActions from './hello-world.actions';

export const helloWorldFeatureKey = 'helloWorld';

export interface HelloWorldState {
  name: string;
}

export const initialState: HelloWorldState = {
  name: 'World',
};

export const helloWorldReducer = createReducer(
  initialState,

  on(HelloWorldActions.sayHelloAction, (state, action) => {
    return {
      ...state,
      name: action.name,
    };
  })
);

interface Person {
  name: string;
  hobbies: string[];
}

const person: Person = {
  name: 'Doug',
  hobbies: ['D&D', 'Basketball'],
};
function addHobby(p: Person, hobby: string): Person {
  // manipulating variables outside of scope :(
  // API calls :(
  // mutating state

  // p.hobbies.push('Hiking'); // :(

  // Returning a clone, to keep my function pure
  return {
    ...p,
    hobbies: [...p.hobbies, hobby],
  };
}
