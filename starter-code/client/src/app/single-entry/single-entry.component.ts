import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JrnlentryService} from '../jrnlentry.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JrnlentryService]
})
export class SingleEntryComponent implements OnInit {
  jrnlentry: any;

  constructor(
    private route: ActivatedRoute,
    private jrnlentryService: JrnlentryService,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    })
  }

getEntryDetails(id) {
  this.jrnlentryService.get(id)
  .subscribe((jrnlentry) => {
    this.jrnlentry = jrnlentry;
  })
}

}
