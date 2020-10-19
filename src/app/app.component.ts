import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sayHelloAction } from './hello-world.actions';
import { selectCurrentName } from './hello-world.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentName$: Observable<string>;
  name = 'World';

  constructor(private store$: Store) {}

  handleSubmit(): void {
    this.store$.dispatch(sayHelloAction({ name: this.name }));
  }

  ngOnInit(): void {
    this.currentName$ = this.store$.pipe(select(selectCurrentName));
  }
}
