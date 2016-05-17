import {Job} from '../../job/job';
export class JobListService {
    mockJobs: Job[] = [
        {title: 'développeur Angular 2'},
        {title: 'Export Node.js'}
    ];
    
    getJobs(){
        return this.mockJobs;
    }
}