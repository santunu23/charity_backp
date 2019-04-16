import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.css'],
})
export class VolunteerPage implements OnInit {

  constructor(
    private http: HttpClient, 
    public loading: LoadingController,
    public alertCtrl: AlertController,
    public alertController: AlertController){}

  ngOnInit() {
  }
  async onSubmit(form:NgForm){
    let res={
      fname: form.value.fname,
      lname: form.value.lname,
      email: form.value.email,
      pword: form.value.pword,
      mno:  form.value.mno,
      address: form.value.address,
      key: 'createvolunteer'
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
      message: '<strong>Thank you!</strong>We will contact with you soon.',
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
