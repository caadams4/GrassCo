

import {Component, Inject, ViewEncapsulation} from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ScheduleComponent {
  constructor(
    public dialogRef: MatDialogRef<ScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
