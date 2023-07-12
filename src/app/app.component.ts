import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cols: any = {
    field: 'document.name',
  };
  rowData: any = {
    document: {
      name: 'Venky',
    },
  };
  constructor() {}
  ngOnInit(): void {
    let result = this.rowData;
    this.cols.field.split('.').forEach((f) => {
      result = result[f];
      console.log(result);
    });
  }
}
