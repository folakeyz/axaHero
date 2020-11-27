import * as React from 'react';
import style from './Hero.module.scss';
import { IHeroProps } from './IHeroProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from "jquery";
import  Heros  from './Heros/Hero';
import { ClassHeros } from './Heros/ClassHeros';
import { IHeros } from './Heros/IHeros';
import { Web } from "sp-pnp-js";


export default class Hero extends React.Component<IHeroProps, any> {
  public constructor(props:IHeroProps,any)
  {
      
      super(props);
      this.state={
          items:[]
      }
      }
  public render(): React.ReactElement<IHeroProps> {
    
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
    {
        this.state.items.map(function(item:IHeros){
    return(
        <div  className={style.hero}>
              <div  className={style.overlay}><h1>{item.Title}</h1></div>
              <div  className={style.img}><img src={item.Image} /></div>
        </div>
    )

    
})

}

      </>
    );
  }
  public componentDidMount()
{
    
    // debugger;
    this._HerosList();
}
private _HerosList():void
{

 
let web = new Web(this.props.context.pageContext.web.absoluteUrl);  
web.lists.getByTitle(`Hero`).items.get().then
    ((response)=>{
        let HerosCollection=response.map(item=> new ClassHeros(item)).reverse();
        let HerosCard = HerosCollection.slice(0, 1)
        this.setState({items:HerosCard});
    }

    )
}
}
