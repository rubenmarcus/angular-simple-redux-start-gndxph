import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

/*
Objetivos:
1. não devemos mutar nenhum dado!
2. deve separar as ações que manipulam o estado dos efeitos colaterais
3. deve aumentar o contador quando clicar no botão add
4. deve subtrair o contador quando clicar no botão sub
5. deve resetar o contador quando clicar no botão reset
6. deve iniciar o contador somando um a cada segundo quando clicar no botão start
7. deve pausar o contador quando clicar no botão pause
*/

enum Action {
  Start,
  Pause,
  Reset,
  Add,
  Subtract,
}

interface AppState {
  count: number,
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private initialState: AppState = {
    count: 0,
  };

  actionType = Action;
  actions$ = new BehaviorSubject(Action.Reset);

  state$: Observable<AppState> = this.actions$.pipe(
    tap(a => console.log(Action[a])),
    mapTo({...this.initialState}),
  );

}
