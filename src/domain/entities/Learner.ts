export class Learner{
    constructor(
        public readonly id:string,
        public firstName:string,
        public lastName:string,
        public email:string,
        public phone:string,
        public hashedPassword:string,
        public isActive:boolean,
        public joiningDate:Date,
        public imageURL?:string,
    ){}
}