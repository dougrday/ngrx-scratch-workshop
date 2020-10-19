import { createAction, props } from '@ngrx/store';

export const sayHelloAction = createAction(
  '@mc/hello-world/say-hello',
  props<{ name: string }>()
);
