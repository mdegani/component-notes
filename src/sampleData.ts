export type FeatureStructure = {
  feature: string;
  components: Component[];
};

export type Component = {
  name: string;
  description: string;
  orientation: string;
  props: Prop[];
  components: Component[];
};

export type Prop = {
  property: string;
  type: string;
};

export const dummy = (a, b) => a + b;

export const sampleData: FeatureStructure = {
  feature: "List and Details",
  components: [
    {
      name: "MainComponent",
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
          description: "This is a simple list.",
          orientation: "h",
          props: [{ property: "items", type: "string[]" }],
          components: [
            {
              name: "ListItemComponent",
              description: "This item repeats, but we can't see that.",
              orientation: "h",
              props: [{ property: "itemText", type: "string" }],
              components: []
            }
          ]
        },
        {
          name: "DetailsComponent",
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
