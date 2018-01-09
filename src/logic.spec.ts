import { removeComponentFunction, stateType } from "./logic";

const mockState: stateType = {
  componentsData: {
    feature: "mock",
    components: [
      {
        name: "level 0, component 0",
        description: "",
        orientation: "",
        props: null,
        components: [
          {
            name: "level 1, component 0",
            description: "",
            orientation: "",
            props: null,
            components: []
          },
          {
            name: "level 1, component 1",
            description: "",
            orientation: "",
            props: null,
            components: []
          }
        ]
      },
      {
        name: "level 0, component 1",
        description: "",
        orientation: "",
        props: null,
        components: []
      }
    ]
  }
};
describe("index actions", () => {
  it("removeComponent should remove a component", () => {
    expect(
      removeComponentFunction([0, 0])(mockState).componentsData.components[0]
        .components.length
    ).toEqual(1);
  });
});
