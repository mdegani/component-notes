import { main } from "@hyperapp/html";
import { h, app } from "hyperapp";
import Feature from "./feature/feature";
import { sampleData } from "./sampleData";

const state = {
  componentsData: sampleData
};

const actions = {};

const view = (state, actions) =>
  main({}, [h(Feature, { componentsData: state.componentsData }, [])]);

app(state, actions, view, document.body);
