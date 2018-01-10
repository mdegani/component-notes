import { Component } from "./component";
import { h } from "hyperapp";
import { div, ul, li, span, a, input } from "@hyperapp/html";

export const EditComponent = ({
  component,
  removeComponent,
  addComponent,
  toggleEditComponent,
  componentPath
}) => {
  const _componentPath = componentPath;
  return component
    ? div({ class: "component bg-washed-yellow ba ma2" }, [
        div({ class: "bg-light-green b bb b--light-blue ma0 mb1 pa1" }, [
          div({ class: "flex flex-row justify-between" }, [
            span({}, [
              input({ value: component.name }),
              a(
                {
                  class: "f6 link dim br1 ba ph3 pv2 mb2 dib black",
                  onclick: _ => {
                    toggleEditComponent(_componentPath);
                  }
                },
                "Done"
              )
            ])
          ]),
          div({ class: "bg-white b ba b--gray pa0 mt2" }, [
            ul({ class: "list pl1" }, [
              component.props.map(prop => {
                return li({ class: "code" }, [
                  span({ class: "b" }, [prop.property]),
                  span({ class: "normal" }, [":"]),
                  span({ class: "normal" }, [prop.type])
                ]);
              })
            ])
          ])
        ]),
        div({ class: "flex flex-column justify-between" }, [
          component.components.map((childComponent, componentIndex) => {
            componentPath = [..._componentPath, componentIndex];
            return h(
              childComponent.editing ? EditComponent : Component,
              {
                component: childComponent,
                removeComponent,
                addComponent,
                toggleEditComponent,
                componentPath
              },
              []
            );
          })
        ])
      ])
    : div({}, []);
};
