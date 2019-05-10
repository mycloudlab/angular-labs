import { Component, VERSION } from '@angular/core';


import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'app1-ng6, angular version: ' + VERSION.full + "dados env app1:" + environment.app1 + ", dados env app2:" +  environment.app2 ;
}
