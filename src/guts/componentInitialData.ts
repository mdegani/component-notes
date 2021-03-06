import { FeatureStructureType } from "./component.types";

export const sampleData: FeatureStructureType = {
  feature: "List and Details",
  components: [
    {
      name: "MainComponent",
      editing: false,
      description: "This is the top level component.",
      orientation: "h",
      props: [
        { property: "prop1", type: "string" },
        { property: "prop2", type: "string" },
        { property: "prop3", type: "number" }
      ],
      components: [
        {
          name: "ListComponent",
          editing: false,
          description: "This is a simple list.",
          orientation: "h",
          props: [{ property: "items", type: "string[]" }],
          components: [
            {
              name: "ListItemComponent",
              editing: false,
              description: "This item repeats, but we can't see that.",
              orientation: "h",
              props: [{ property: "itemText", type: "string" }],
              components: []
            }
          ]
        },
        {
          name: "DetailsComponent",
          editing: false,
          description: "Details for the selected item.",
          orientation: "h",
          props: [
            { property: "itemText", type: "string" },
            { property: "timeSelected", type: "Date" }
          ],
          components: []
        }
      ]
    }
  ]
};
