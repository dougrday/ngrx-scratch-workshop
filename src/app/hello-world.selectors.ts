import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHelloWorld from './hello-world.reducer';

export const selectHelloWorldState = createFeatureSelector<fromHelloWorld.HelloWorldState>(
  fromHelloWorld.helloWorldFeatureKey
);

export const selectCurrentName = createSelector(
  selectHelloWorldState,
  state => state.name
);
