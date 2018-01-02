import { h } from 'hyperapp';
import { Component } from '../component/component';

export default ({ componentsData }) => h('div', {}, [
  h('h1',{}, ['Feature:' + componentsData.feature]),
  componentsData.components.map(component => {
    return h(Component, {component: component}, []);
  },]
);