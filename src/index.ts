import { h, app } from 'hyperapp';
import Feature from './feature/feature';
import sampleData from './sampleData';

const state = {
  componentsData: sampleData,
};

const actions = {};

const view = (state, actions) => h('main', {}, [
  h(Feature, {componentsData: state.componentsData}, [])
]);

app(state, actions, view, document.body);
