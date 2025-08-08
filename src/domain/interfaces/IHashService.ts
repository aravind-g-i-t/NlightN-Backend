export interface IHashService{
    hash(password:string):Promise<string>;
    compare(raw:string,hashed:string):Promise<boolean>
}