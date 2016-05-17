import { FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { JobListService } from '../shared/job-list/job-list.service';
import {Job} from '../job/job';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})
/**
 * This class represents the lazy loaded HomeComponent.
 */
export class HomeComponent implements OnInit{

  searchItem: string;
  searchPlace: string;
  jobs: Job[];

  /**
   * Creates an instance of the HomeComponent with the injected
   * JobListService.
   *
   * @param {JobListService} jobListService the injected JobListService
   */
  constructor(public jobListService: JobListService) {}
  
  ngOnInit(){
    this.jobs = this.jobListService.getJobs();
  }
  

}
