import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
classes = ['small-title', 'green-text']
}
