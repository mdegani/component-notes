import {
  removeComponentFunction,
  addComponentFunction,
  toggleEditComponent,
  stateType
} from "./logic";

const mockState: stateType = {
  componentsData: {
    feature: "mock",
    components: [
      {
        name: "level 0, component 0",
        editing: false,
        description: "",
        orientation: "",
        props: null,
        components: [
          {
            name: "level 1, component 0",
            editing: false,
            description: "",
            orientation: "",
            props: null,
            components: []
          },
          {
            name: "level 1, component 1",
            editing: false,
            description: "",
            orientation: "",
            props: null,
            components: []
          }
        ]
      },
      {
        name: "level 0, component 1",
        editing: false,
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
  it("addComponent should add a new component", () => {
    expect(
      addComponentFunction([0, 0])(mockState).componentsData.components[0]
        .components.length
    ).toEqual(3);
  });
  it("toggleEditComponent should toggle editing", () => {
    console.log(mockState.componentsData.components[0].editing);
    expect(
      toggleEditComponent([0, 0])(mockState).componentsData.components[0]
        .components[0].editing
    ).toEqual(true);
  });
});
