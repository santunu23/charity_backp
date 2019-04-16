import { Injectable } from '@angular/core';
import { Homeload } from './homeload.model'

@Injectable({
  providedIn: 'root'
})
export class HomeloadService {
  private _homecontent: Homeload[]=[
    new Homeload('1','Save Rohingas','Lorem Ipsum is simply dummy text of the printing and typesetting industry.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'http://drive.google.com/uc?export=view&id=1K-kMm96GlpcSYxflGsRz7AtEIpOH3zyF'),
    new Homeload('2','Shanty tragedy in Dhaka','Lorem Ipsum is simply dummy text of the printing and typesetting industry.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'http://drive.google.com/uc?export=view&id=1m7zcXp94ZTYBE7zAoH3tuOkBHdQPbUdg'),
    new Homeload('3','Flood in Rongpur','Lorem Ipsum is simply dummy text of the printing and typesetting industry.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'http://drive.google.com/uc?export=view&id=17JSGe-A0hdcsvox7NFINx0SrOmO5SGGT'),
    new Homeload('4','Earthquake tragedy in Sylhet ','Lorem Ipsum is simply dummy text of the printing and typesetting industry.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'http://drive.google.com/uc?export=view&id=15qGJgmD9L8q9bMMZoL1WBpBqqtj_9ZOM'),
    new Homeload('5','Food Shortage in Rajshahi','Lorem Ipsum is simply dummy text of the printing and typesetting industry.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'http://drive.google.com/uc?export=view&id=1o0BKI3rxCb_oM76lV5z63KTjh58eI0MM'
    ),
  ];
  getallhomecontent(){
    return [...this._homecontent];
  }
  gethomecontent(homeloadId: string){
    return {
        ...this._homecontent.find(homeload=>{
        return homeload.id === homeloadId;
      })
    }
  }

  constructor() { }
}
