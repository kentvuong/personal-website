import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-scroll',
  templateUrl: './nav-scroll.component.html',
  styleUrls: ['./nav-scroll.component.css']
})
export class NavScrollComponent implements OnInit {

  navSections: Array<String> = ['Home', 'Projects', 'Contact Me'];

  constructor() { }

  ngOnInit() {
  }

}
