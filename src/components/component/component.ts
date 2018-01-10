import { h } from "hyperapp";
import { div, ul, li, span, a } from "@hyperapp/html";
import { EditComponent } from "./edit-component";
import {
  toggleEditComponent,
  updateComponentName
} from "../../guts/component.logic";
import { ComponentType } from "../../guts/component.types";

export type ComponentProps = {
  component: ComponentType;
  removeComponent: any;
  addComponent: any;
  toggleEditComponent: any;
  updateComponentName: any;
  componentPath: number[];
};

export const Component = ({
  component,
  removeComponent,
  addComponent,
  toggleEditComponent,
  updateComponentName,
  componentPath
}: ComponentProps) => {
  const _componentPath = componentPath;
  return component
    ? div({ class: "component bg-washed-yellow ba ma2" }, [
        div({ class: "bg-washed-blue b bb b--light-blue ma0 mb1 pa1" }, [
          div({ class: "flex flex-row justify-between" }, [
            span({}, component.name),
            span({}, [
              a(
                {
                  class: "f6 link dim br1 ba ph3 pv2 mb2 dib black",
                  onclick: _ => {
                    addComponent([..._componentPath, 0]);
                  }
                },
                "New"
              ),
              a(
                {
                  class: "f6 link dim br1 ba ph3 pv2 mb2 dib black",
                  onclick: _ => {
                    removeComponent(_componentPath);
                  }
                },
                "❌"
              )
            ])
          ]),
          div({ class: "bg-white b ba b--gray pa0 mt2" }, [
            ul(
              { class: "list pl1" },
              component.props!.map(prop => {
                return li({ class: "code" }, [
                  span({ class: "b" }, [prop.property]),
                  span({ class: "normal" }, [":"]),
                  span({ class: "normal" }, [prop.type])
                ]);
              })
            )
          ])
        ]),
        div(
          { class: "flex flex-column justify-between" },
          component.components.map((childComponent, componentIndex) => {
            componentPath = [..._componentPath, componentIndex];
            return h(
              childComponent.editing ? EditComponent : Component,
              {
                component: childComponent,
                removeComponent,
                addComponent,
                toggleEditComponent,
                updateComponentName,
                componentPath
              },
              []
            );
          })
        )
      ])
    : div({}, []);
};
