import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrassCo';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ScheduleComponent, {
      width: '40%',
      height: '70%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log('The dialog was closed');
    });
  }
}
