// import update from "immutability-helper";  // only works when using babel, breaks in unit tests when only using tsc
const update = require("immutability-helper");

import { FeatureStructure } from "./sampleData";

// TODO, refactor the functions that use paths to nested components, lots of repetition

export type stateType = {
  componentsData: FeatureStructure;
};

export const removeComponentFunction = (payload: number[]) => (
  state: stateType
): stateType => {
  const path = {
    componentsData: payload.reverse().reduce((acc, cur, idx) => {
      if (idx === 0) {
        return {
          components: {
            $splice: [[cur, 1]]
          }
        };
      }
      return {
        components: {
          [cur]: {
            ...acc
          }
        }
      };
    }, {})
  };
  return update(state, path);
};

export const addComponentFunction = (payload: number[]) => (
  state: stateType
): stateType => {
  const path = {
    componentsData: payload.reverse().reduce((acc, cur, idx) => {
      if (idx === 0) {
        return {
          components: {
            $push: [
              {
                name: "new component",
                editing: true,
                description: "",
                orientation: "h",
                props: [],
                components: []
              }
            ]
          }
        };
      }
      return {
        components: {
          [cur]: {
            ...acc
          }
        }
      };
    }, {})
  };
  return update(state, path);
};

export const toggleEditComponent = (payload: number[]) => (
  state: stateType
): stateType => {
  const path = {
    componentsData: payload.reverse().reduce((acc, cur, idx) => {
      if (idx === 0) {
        return {
          components: {
            [cur]: {
              $toggle: ["editing"]
            }
          }
        };
      }
      return {
        components: {
          [cur]: {
            ...acc
          }
        }
      };
    }, {})
  };
  return update(state, path);
};

export const updateComponentName = (payload: {
  path: number[];
  componentName: string;
}) => (state: stateType): stateType => {
  const path = {
    componentsData: payload.path.reverse().reduce((acc, cur, idx) => {
      if (idx === 0) {
        return {
          components: {
            [cur]: {
              name: {
                $set: payload.componentName
              }
            }
          }
        };
      }
      return {
        components: {
          [cur]: {
            ...acc
          }
        }
      };
    }, {})
  };
  return update(state, path);
};
