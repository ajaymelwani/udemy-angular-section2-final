import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', // Like attribute
  //selector: '.app-servers', // Like class
  selector: 'app-servers', // Like Element
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}