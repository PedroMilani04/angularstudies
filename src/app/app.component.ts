import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from '../app/components/first-component/first-component.component'
import { ParentDataComponent } from '../app/components/parent-data/parent-data.component'
import { DirectivesComponent } from '../app/components/directives/directives.component'
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponentComponent,
    ParentDataComponent, DirectivesComponent, IfRenderComponent,
    EventosComponent, EmitterComponent, ListRenderComponent,
    PipesComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Pedro"
  dataPass = "data sendo passada"
  title = 'cursoteste';
}
