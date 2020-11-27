import { IHeros } from "./IHeros";
export class ClassHeros{
    public Image:string;
    public Title:string;
   


    constructor(item: IHeros){
        this.Image = item.Image;
        this.Title = item.Title;
       
    }
}