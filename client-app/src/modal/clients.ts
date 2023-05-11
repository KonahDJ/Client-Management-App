export class Clients {
    cid: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    
    constructor(cid: number, name: string, company: string, email: string, phone: string) {
        this.cid = cid;
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
    }


}