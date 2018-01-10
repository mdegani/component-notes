# Component notes

A cheat sheet builder for complicated component hierarchies.

This app uses Hyperapp, Parcel, TypeScript and Tachyons. 🦖

## Running the app.

`npm start` will run the app. Actions are logged to console.

`npm test` runs tests.

## Purpose

The purpose of the app is to manually build a cheat sheet for a component hierarchy for an application's features. I have often been asked to contribute to mature frontend applications and I'm looking for ways to make on-boarding to such projects faster. I learn by writing, drawing or typing. Creating cheat sheets helps me memorize stuff. While dev tools can show you more information automatically, this tool allows you to do the same, but *manually*.

**NB:** this application is incomplete and does not yet fulfil the above the objective.

## Technical Notes and Observations

### TypeScript

This application uses TypeScript. Parcel handles the transpilation when the application runs. The `tsconfig` is only used by Jest. It's not ideal that running the app and testing utilize two very different build systems.

My experience has shown that normalizing the store results in a simpler codebase. I'm not following this rule here. I'm using a recursively nested model:

```typescript
export type Component = {
  name: string;
  editing: boolean;
  description: string;
  orientation: string;
  props: Prop[] | null;
  components: Component[];
};
``` 

Because of this, I have to make changes to values that are nested at arbitrarily deep levels in the reducers. Ensuring immutability while making such changes has made me rely on the `immutability-helper` library. I'd rather have better typing in the reducers, but that would probably mean storing the data differently.

### Tachyons

This applicaiton has minimal css and relies heavily on Tachyons.

### JSX

I'm not using jsx in this app, and instead I'm using `hyperapp/html`. I tried jsx and TypeScript together, but couldn't get Parcel to build properly.

I'm really loving `hyperapp/html` and I don't miss jsx.
