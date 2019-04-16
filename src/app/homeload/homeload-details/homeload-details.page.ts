import { HomeloadService } from './../homeload.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Homeload } from  '../homeload.model';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-homeload-details',
  templateUrl: './homeload-details.page.html',
  styleUrls: ['./homeload-details.page.css'],
})
export class HomeloadDetailsPage implements OnInit {
  loadedhomecontent: Homeload;

  constructor(private activatedRoute: ActivatedRoute, private HomeloadService: HomeloadService,
    private navCtrl:NavController) {} 
    
   cardroute(){
    this.navCtrl.navigateForward('login');
   }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('homeloadId')){
        return;
      }
      const homeloadId= paramMap.get('homeloadId');
      this.loadedhomecontent=this.HomeloadService.gethomecontent(homeloadId);
    })

  }

}
