import { Component, OnInit } from '@angular/core';
import { HomeloadService } from './homeload.service';
import { Homeload } from './homeload.model';

@Component({
  selector: 'app-homeload',
  templateUrl: './homeload.page.html',
  styleUrls: ['./homeload.page.css'],
})
export class HomeloadPage implements OnInit {
  loadHome: Homeload[];
  constructor(private homeService:HomeloadService) { }

  ngOnInit() {
    this.loadHome= this.homeService.getallhomecontent();
  }

}
