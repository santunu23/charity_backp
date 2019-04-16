import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpword',
  templateUrl: './forgetpword.page.html',
  styleUrls: ['./forgetpword.page.scss'],
})
export class ForgetpwordPage implements OnInit {

  constructor(private http: HttpClient,
    private navCtrl:NavController,
    public loading: LoadingController,
    public alertCtrl: AlertController,
    public alertController: AlertController,) { }

  ngOnInit() {
  }
  async onSubmit(form: NgForm){
  let res={
    email: form.value.email,
    key: "forgetpassword"
  }
  
  const loading=await this.loading.create({
    message: 'Please wait...',
    spinner: 'crescent',
  });


  loading.present().then(() => {
    this.http.post('http://localhost/charityapp_desktopapp/insert.php', JSON.stringify(res))
    .subscribe(response=>{
    if(response["message"]==="Mail has send"){
         loading.dismiss();
         this.myfunc("unique");
         form.reset();
        }else if(response["message"]==="Technical Problem arise"){
          loading.dismiss();
        this.myfunc("duplicate");
        form.reset();
      }
      
    })
  });
}

async myfunc(res){ 
  
  if(res==="unique"){
    const alert = await this.alertController.create({
      header: 'Update',
      message: '<strong>Check your mail</strong> We send details.Please check in spam folder also',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
        }
      ],
    });
    await alert.present();
 }else if(res==="duplicate"){
    const alert = await this.alertController.create({
      header: 'Error',
      message: '<strong>OOOPS!!!</strong> We do not have this email ID on our system',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
        }
      ],
    });
    await alert.present(); 
  }
} 
  routeregister(){
    this.navCtrl.navigateBack('register');
  }
}
