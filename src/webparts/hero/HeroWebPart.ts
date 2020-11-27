import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HeroWebPartStrings';
import Hero from './components/Hero';
import { IHeroProps } from './components/IHeroProps';

export interface IHeroWebPartProps {
  description: string;
  Title:string;
  Image: string;
}

export default class HeroWebPart extends BaseClientSideWebPart<IHeroWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHeroProps> = React.createElement(
      Hero,
      {
        description: this.properties.description,
        Image: this.properties.Image,
        Title: this.properties.Title,
        context: this.context 
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
