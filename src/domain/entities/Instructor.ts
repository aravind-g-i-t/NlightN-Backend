export class Instructor{
    constructor(
        public readonly id:string,
        public firstName:string,
        public lastName:string,
        public email:string,
        public phone:string,
        public password:string,
        public isActive:boolean,
        public joiningDate:Date,
        public imageURL?:string,
    ){}
}