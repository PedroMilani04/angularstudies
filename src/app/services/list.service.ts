import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    console.log('service ativando');
    return animals.filter((a) => animal.name !== a.name) // filtra e refaz a lista com todos os animais com o name diferente do escolhido
  }
}
