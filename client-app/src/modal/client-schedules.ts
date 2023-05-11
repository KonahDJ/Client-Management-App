export class Schedules {
    sid: number;
    name: string;
    company: string;
    project: string;
    meeting: string;
    
    constructor(sid: number, name: string, company: string, project: string, meeting: string) {
        this.sid = sid;
        this.name = name;
        this.company = company;
        this.project = project;
        this.meeting = meeting;
    }


}