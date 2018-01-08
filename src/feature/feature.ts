import { h } from "hyperapp";
import { div, h1 } from "@hyperapp/html";
import { Component } from "../component/component";

export default ({ componentsData }) =>
  div({}, [
    h1({}, ["Feature:" + componentsData.feature]),
    componentsData.components.map(component => {
      return h(Component, { component: component }, []);
    })
  ]);
