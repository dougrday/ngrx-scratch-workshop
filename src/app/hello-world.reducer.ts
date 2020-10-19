import { Action, createReducer, on } from '@ngrx/store';
import * as HelloWorldActions from './hello-world.actions';

export const helloWorldFeatureKey = 'helloWorld';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(HelloWorldActions.loadHelloWorlds, state => state),
  on(HelloWorldActions.loadHelloWorldsSuccess, (state, action) => state),
  on(HelloWorldActions.loadHelloWorldsFailure, (state, action) => state),

);

