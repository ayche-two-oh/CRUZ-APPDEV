import { Component, OnInit } from "@angular/core";
import { Show } from "../modal/modal";
import { DataService } from "../data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  shows: Show[] = [];
  constructor(private data: DataService){ }

  ngOnInit(){
    this.data.getShows().subscribe(item => {
      this.shows = item;
      console.log(item);
    })
  }
}