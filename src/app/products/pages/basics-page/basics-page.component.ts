import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'thomas';
  public nameUpper: string = 'THOMAS';
  public fullName: string = 'ThOmAs gAtLeY';


  public customDate: Date = new Date();


}
