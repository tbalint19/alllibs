import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OnInit } from '@angular/core';

type Fruit = {
  name: string,
  color: string,
  isAvailable: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.value.subscribe(v => localStorage.setItem("value", v))
  }

  value = new BehaviorSubject("")

  reset() {
    this.value.next("")
  }

  

  name = 'John';

  fruits: Fruit[] = [
    { name: "alma", color: "red", isAvailable: true },
    { name: "barack", color: "peach", isAvailable: false },
    { name: "narancs", color: "orange", isAvailable: true },
  ]

  change() {
    this.name = "Jim"
  }
}
