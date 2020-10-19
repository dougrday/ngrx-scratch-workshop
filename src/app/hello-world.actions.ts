import { createAction, props } from '@ngrx/store';

export const sayHelloAction = createAction(
  '@mc/hello-world/say-hello',
  props<{ name: string }>()
);

export const sayHelloSuccessAction = createAction(
  '@mc/hello-world/say-hello/success',
  props<{ data: any }>()
);

export const sayHelloFailureAction = createAction(
  '@mc/hello-world/say-hello/failure',
  props<{ error: any }>()
);
