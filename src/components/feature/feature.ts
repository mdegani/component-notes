import { h } from "hyperapp";
import { div, h1 } from "@hyperapp/html";
import { Component } from "../component/component";
import {
  FeatureStructureType,
} from "../../guts/component.types";

type FeatureProps = {
  componentsData: FeatureStructureType;
  removeComponent: any;
  addComponent: any;
  toggleEditComponent: any;
  updateComponentName: any;
};

export default ({
  componentsData,
  removeComponent,
  addComponent,
  toggleEditComponent,
  updateComponentName
}: FeatureProps) =>
  div({}, [
    h1({}, ["Feature:" + componentsData.feature]),
    ...componentsData.components.map(component => {
      return h(
        Component,
        {
          component,
          removeComponent,
          addComponent,
          toggleEditComponent,
          updateComponentName,
          componentPath: [0]
        },
        []
      );
    })
  ]);
