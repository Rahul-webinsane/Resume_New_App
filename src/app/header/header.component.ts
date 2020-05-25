import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private titlePage: Title, private router: Router) { }

  ngOnInit(): void {
  }
  setPageTitle(title: string) {
    this.titlePage.setTitle(title);
  }
}
