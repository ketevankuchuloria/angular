import { Component, OnInit } from '@angular/core';

interface Person {
  name:string;
  age: number;
}

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.scss']
})
export class PerentComponent implements OnInit {
  name: string = '';

  isShown = true;

  isRed = true;

  animals = ['dog', 'cat', 'donkey'];

  people = [
    {
    name: 'keti',
    age: 26,
  },
  {
    name: 'ketevan',
    age: 27,
  },
  {
    name: 'keto',
    age: 28,
  },
]

  constructor() { }

  red(){
    this.isRed = !this.isRed
  }

  printName() {
    console.log(this.name)
  } 

  changeNameToKeti(){
    this.name = "keti";
  }

  toggle(){
    this.isShown=!this.isShown
  }

  getClassName(){
    return {red: this.isRed, big: true};
  }

  getCollor(){
    return{ color: 'green'}
  }

  ngOnInit(): void {
  }

}
