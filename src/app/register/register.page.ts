import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {

  constructor(  private http: HttpClient, 
    public loading: LoadingController,
    public alertCtrl: AlertController,
    public alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm){
    let res={
      fname: form.value.fname,
      lname: form.value.lname,
      email: form.value.email,
      pword: form.value.pword,
      mno:  form.value.mno,
      key: 'registeruser'
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
      if(response["message"]==="Data saved successfully"){
         this.myfunc("new");
         this.navCtrl.navigateForward('login');
          
        }else if(response["message"]==="This email ID already used"){
          this.myfunc("duplicate");
          form.reset();
        }
        
      })
    });

  }
  async myfunc(res){ 
    
    if(res==="new"){
      const alert = await this.alertController.create({
        header: 'Success',
        message: '<strong>Almost done!</strong>, login to the system.',
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
        header: 'Success',
        message: '<strong style="red">Sorry!</strong> The Email Id already exit,try another one.',
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
