This app uses Hyperapp, Parcel, TypeScript and Tachyons. 🦖

## W5

**Who? Where?** I'm just a dev from Toronto.

**Why not jsx?** I just couldn't get it to work with Parcel + TypeScript 😞. The hyperapp/html library is pretty sweet and it's just javascript! That's a plus.

**Why TypeScript?** Because I like it. I thought it would be more helpful in reducers. It hasn't helped much, but I'm not ready to throw it out. I think TS is nice when you have rest endpoints and a large store.

**Why Parcel?** No configuration. And it's new and shiny.

**Why Hyperapp** Because it's new and shiny and you don't have to set up redux.

**Why immutability-helper?** After thinking and searching for a solution, I decided to use `immutability-helper` to make reducers work with strongly typed, deeply nested, data. The idea of using spread operators recursively hurt my brain. While ImmutableJS would have been great, I just didn't want to use it. `fromJS` and `toJS` take your data to and from (respectively) a better place, I just didn't feel like it. So this is the compromise.

**Why Tachyons?** It takes a bit getting used to, but then it's just easier. Why write css when it has already been written for you? Tachyons classes are like the letters in the alphabet -- there are very few of them but they can be composed into amazing (or not so amazing!) things.

**What?** This app was created by me to be able to manually create cheat sheets for component hierarchies of features in new and complex codebases. I learn by writing, drawing or typing. So this is meant to be a simple app to help manually create a visual representation of a component hierarchy. *Software to help do things manually?* Yes.

**When?** When will this app actually work? Some time in the future, or never (?). At the moment you can delete components. But you can't create them! 👌

## Running the app.

`npm start` will run the app. Actions are logged to console.

`npm test` runs tests.
