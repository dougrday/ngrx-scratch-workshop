import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HelloWorldEffects } from './hello-world.effects';

describe('HelloWorldEffects', () => {
  let actions$: Observable<any>;
  let effects: HelloWorldEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HelloWorldEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HelloWorldEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
