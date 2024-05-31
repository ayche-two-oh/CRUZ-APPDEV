import { Component, OnInit } from '@angular/core';
import { Show } from '../modal/modal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  show: Show[] = [];
  constructor(private api: DataService) {}

  ngOnInit(): void {
    this.api.getShows().subscribe(item => {
      this.show = item;
    })
  }

}