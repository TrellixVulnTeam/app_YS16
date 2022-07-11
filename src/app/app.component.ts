import {Component} from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl:'app.component.html'
})

export class AppComponent{
  birtday=new Date(1987,7,7)
}