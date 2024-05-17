import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-gridview2',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './gridview1.component.html',
  styleUrl: './gridview1.component.scss'
})
export class Gridview2Component {
  heroTitle:string = "Title1";
  heroCaption:string = "Caption1";

  
}
