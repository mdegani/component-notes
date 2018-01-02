import { h } from 'hyperapp';

export const Component = ({ component }) => {
  return component ?
    h('div', {class:'component bg-washed-yellow ba ma2'}, [
      h('div', {class:'bg-washed-blue b bb b--light-blue ma0 mb1 pa1'}, [ component.name,
        h('div', {class:'bg-white b b--dark-gray pa0 mt2'}, [
          h('ul', {class:'list pl1'}, [
            component.props.map(prop => {
              return (
                h('li', {class: 'code'}, [
                  h('span', {class:'b'}, [prop.property]),
                  h('span', {class:'normal'}, [':']),
                  h('span', {class:'normal'}, [prop.type])
                ])
              )
            })
          ])
        ])
      ]),
      h('div', {class:'flex flex-column justify-between'}, [
        component.components.map(childComponent => {
          return h(Component, {component:childComponent}, [])
        })
      ])
    ]): h('div',{}, []);
};
