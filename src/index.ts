import { main } from "@hyperapp/html";
import { h, app } from "hyperapp";
import logger from "@hyperapp/logger";
import { sampleData } from "./sampleData";
import Feature from "./feature/feature";
import { removeComponentFunction, addComponentFunction, toggleEditComponent } from "./logic";

const state = {
  componentsData: sampleData
};

export const actions = {
  removeComponent: removeComponentFunction,
  addComponent: addComponentFunction,
  toggleEditComponent
};

const view = (state, actions) =>
  main({}, [
    h(
      Feature,
      {
        componentsData: state.componentsData,
        removeComponent: actions.removeComponent,
        addComponent: actions.addComponent,
        toggleEditComponent: actions.toggleEditComponent
      },
      []
    )
  ]);

logger()(app)(state, actions, view, document.body);
