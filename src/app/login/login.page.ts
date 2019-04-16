import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  constructor(
    private http: HttpClient,
    private navCtrl:NavController,
    public loading: LoadingController,
    public alertCtrl: AlertController,
    public alertController: AlertController,
   ) { }

  ngOnInit() {
  }

  routeregister(){
    this.navCtrl.navigateForward("register");
  }

  async onSubmit(form: NgForm){
    let res={
      email: form.value.email,
      pword: form.value.pword,
      key: 'login'
    }

    console.log(res);
    const loading=await this.loading.create({
      message: 'Please wait...',
      spinner: 'crescent',
    });
     
    loading.present().then(() => {
      this.http.post('http://localhost/charityapp_desktopapp/insert.php', JSON.stringify(res))
      .subscribe(response=>{
        loading.dismiss();
      if(response["message"]==="This email ID exit"){
         this.navCtrl.navigateForward('payment');
          
        }else if(response["message"]==="This email ID does not exit"){
          this.myfunc("duplicate");
          form.reset();
        }
        
      })
    });
  }

  async myfunc(res){ 
    if(res==="duplicate"){
      const alert = await this.alertController.create({
        header: 'Error',
        message: '<strong>Email or Password are wrong.</strong> if your forget the password,click on reset password.',
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

}
