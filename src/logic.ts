// import update from "immutability-helper";  // only works when using babel, breaks in unit tests when only using tsc
const update = require("immutability-helper");

import { FeatureStructure } from "./sampleData";

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
