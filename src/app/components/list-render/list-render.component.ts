import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {

  animals: Animal[] = [
    { name: 'Joao', type: 'People', age: 10 },
    { name: 'Jajj', type: '???', age: 10 },
    { name: 'tog', type: 'horse', age: 10 },
    { name: 'luva', type: 'stone', age: 10 }
  ]

  animalDetails = ''

  constructor(private listService: ListService) {

  }


  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }


  removeAnimal(animal: Animal) {
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal) // link com o service
  }
}
