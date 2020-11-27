import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface IHeroProps {
  Image:string;
  Title:string;
  description: string;
  context:WebPartContext; 
}
