import { h } from "hyperapp";
import { div, h1 } from "@hyperapp/html";
import { Component } from "../component/component";

export default ({ componentsData, removeComponent }) =>
  div({}, [
    h1({}, ["Feature:" + componentsData.feature]),
    componentsData.components.map(component => {
      return h(
        Component,
        { component, removeComponent, componentPath: [0] },
        []
      );
    })
  ]);
