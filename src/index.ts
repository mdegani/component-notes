import { main } from "@hyperapp/html";
import { h, app } from "hyperapp";
import logger from "@hyperapp/logger";
import { sampleData } from "./sampleData";
import Feature from "./feature/feature";
import { removeComponentFunction } from "./logic";

const state = {
  componentsData: sampleData
};

export const actions = {
  removeComponent: removeComponentFunction
};

const view = (state, actions) =>
  main({}, [
    h(
      Feature,
      {
        componentsData: state.componentsData,
        removeComponent: actions.removeComponent
      },
      []
    )
  ]);

logger()(app)(state, actions, view, document.body);
