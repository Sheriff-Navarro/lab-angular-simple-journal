import { Component, OnInit, Input} from '@angular/core';
import {JrnlentryService} from '../jrnlentry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JrnlentryService]
})
export class EntryListComponent implements OnInit {
  jrnlentries;

  constructor(private jrnlentry: JrnlentryService) { }

  ngOnInit() {
    this.jrnlentry.getList()
    .subscribe((jrnlentries) => {
      this.jrnlentries = jrnlentries;
    })
  }

}
