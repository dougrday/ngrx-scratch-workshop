import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as HelloWorldActions from './hello-world.actions';



@Injectable()
export class HelloWorldEffects {

  loadHelloWorlds$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(HelloWorldActions.loadHelloWorlds),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => HelloWorldActions.loadHelloWorldsSuccess({ data })),
          catchError(error => of(HelloWorldActions.loadHelloWorldsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
