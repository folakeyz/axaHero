import * as React from 'react';
import style from '../Hero.module.scss';
import pnp from 'sp-pnp-js';
import { IHerosItemReactProps } from './IHerosItemReactProps';
import { IHeroProps } from '../IHeroProps';
import { ClassHeros } from './ClassHeros';
import { IHeros } from './IHeros';
import { Web } from "sp-pnp-js";


export default class Heros extends React.Component<IHeroProps, any> {
    
    public constructor(props:IHeroProps,any)
    {
        
        super(props);
        this.state={
            items:[]
        }
        }
            render() {
return(
<>
    {
        this.state.items.map(function(item:IHeros){
    return(
        <div  className={style.hero}>
           <img src={item.Image} />
        </div>
    )

    
})

}

</>
)
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