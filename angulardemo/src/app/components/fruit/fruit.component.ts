import { Component, Input } from '@angular/core';

type Fruit = {
  name: string,
  color: string,
  isAvailable: boolean,
}

@Component({
  selector: 'app-fruit-component',
  templateUrl: './fruit.component.html',
})
export class FruitComponent {
  @Input() fruit: Fruit | null = null
}
