import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { LoadingController,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-getupdate',
  templateUrl: './getupdate.page.html',
  styleUrls: ['./getupdate.page.css'],
})


export class GetupdatePage implements OnInit{
  ngOnInit() {}
  constructor(
    private http: HttpClient, 
    public loading: LoadingController,
    public alertCtrl: AlertController,
    public alertController: AlertController ) {}
  async onSubmit(form:NgForm){
    let res={
      email: form.value.email,
      mno:  form.value.mno,
      key: 'getupdate'
    }
    const loading=await this.loading.create({
      message: 'Please wait...',
      spinner: 'crescent',
    });
    
    loading.present().then(() => {
      this.http.post('http://localhost/charityapp_desktopapp/insert.php', JSON.stringify(res))
      .subscribe(response=>{
        loading.dismiss();
      if(response["message"]==="Data saved successfully"){
         this.myfunc();
          form.reset();
        }
        
      })
    });
      
      
}
async myfunc(){
  const alert = await this.alertController.create({
    header: 'Success',
    message: 'Thank you! Your record stored',
    buttons: [
      {
        text: 'OK',
        cssClass: 'secondary',
      }
        
    ],
    // cssClass: 'primary',
  });
  await alert.present(); 
  
 
}
}