import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Thomas';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'John', 'Marcos', 'Martha', 'Carlitos']
  public clientsMap = {
    '=0': 'no hay nadie esperando.',
    '=1': 'hay un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'John',
    age: 36,
    address: 'Mardel'
  }

  // Async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500)
  } )
}
