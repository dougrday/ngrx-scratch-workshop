import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sayHelloAction } from './hello-world.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'World';

  constructor(private store$: Store) {
  }

  handleSubmit(): void {
    this.store$.dispatch(sayHelloAction({ name: this.name }));
  }
}
