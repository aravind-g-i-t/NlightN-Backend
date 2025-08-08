export class Organisation{
    constructor(
        public readonly id:string,
        public orgName:string,
        public email:string,
        public phone:string,
        public password:string,
        public isActive:boolean,
        public joiningDate:Date,
        public imageURL?:string,
    ){}
}