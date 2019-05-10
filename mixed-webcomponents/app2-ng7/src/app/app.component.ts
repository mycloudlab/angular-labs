import { Component, VERSION} from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2-ng7, angular version: ' + VERSION.full  + "dado env app1:" + environment.app1 + ", dado env app2:" +  environment.app2 ;;
}
