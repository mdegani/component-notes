import { h } from "hyperapp";
import { div, ul, li, span } from "@hyperapp/html";

export const Component = ({ component }) => {
  return component
    ? div({ class: "component bg-washed-yellow ba ma2" }, [
        div({ class: "bg-washed-blue b bb b--light-blue ma0 mb1 pa1" }, [
          component.name,
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
          component.components.map(childComponent => {
            return h(Component, { component: childComponent }, []);
          })
        ])
      ])
    : div({}, []);
};
