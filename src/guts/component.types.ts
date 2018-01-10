export type stateType = {
  componentsData: FeatureStructureType;
};

export type FeatureStructureType = {
  feature: string;
  components: ComponentType[];
};

export type ComponentType = {
  name: string;
  editing: boolean;
  description: string;
  orientation: string;
  props: PropType[] | null;
  components: ComponentType[];
};

export type PropType = {
  property: string;
  type: string;
};