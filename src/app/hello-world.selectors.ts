import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHelloWorld from './hello-world.reducer';

export const selectHelloWorldState = createFeatureSelector<fromHelloWorld.State>(
  fromHelloWorld.helloWorldFeatureKey
);
