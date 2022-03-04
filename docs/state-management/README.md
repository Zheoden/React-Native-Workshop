# State Management

- [Motivation](#motivation)
- [Alternatives](#alternatives)
    - [React Context](#react-context)
    - [Redux](#redux)
        - [Asynchronous calls](#Asynchronous-calls)
- [Setup](#Setup)
- [References](#References)

## Motivation
We all understand why State Management is important, but let's assume we don't... Why should we bother?

With state management we extract state's logic from each component/screen leaving just handlers that are called to retrieve or modify state's information. Also, state management came to avoid **prop drill down**, giving easy access to components to the global state.

Okay, that sounds good but how do we achieve something like that? There are two popular alternatives with a lot of articles/documentation about them.

## Alternatives
The following alternatives are great but we think that they work best under different circumstances. Let's get to it!

### React Context
[As stated on React Context's documentation](https://reactjs.org/docs/context.html):
> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

This specially applies for language or theme related props that are global and need to be fed to each "leaf" of the branch of children.

[Documentation](https://reactjs.org/docs/context.html) is very clear on `React Context`, but we will provide some other links for those who are interested in digging a bit deeper. 
<!-- TODO: Add example based from tritriva's project -->

<!-- Also, on the `example` folder you can find an implementation of Context for another project (`#project-tritriva`) that after wrapping the `App` with the `<BasketProvider>` every component [(implemented as a function)](https://reactjs.org/warnings/invalid-hook-call-warning.html) may call the `useBasketContext()` function. -->

Below you'll find some examples of how to implement Context:
- [Introduction to React Context API](https://medium.com/@chathuranga94/introduction-to-react-context-api-90f5e4d7a7a9)
- [How we handle React Context](https://medium.com/trabe/how-we-handle-react-context-e43d303a27a2)
- [Using Context API in React (Hooks and Classes)](https://www.taniarascia.com/using-context-api-in-react/)
- [How to Work with the React Context API](https://www.toptal.com/react/react-context-api)

### Redux
`Redux` is another library that helps us manage app's state. As Hristijan Stevanoski affirms [on his excellent article](https://medium.com/javascript-in-plain-english/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6), there are two crucial design patterns that `Redux` follows:  _Immutability_ and _Single Source Of Truth_.
> Immutability means that we don’t change the state object and its properties directly. Instead, we make a new object, recalculate the new application state and update it with our newly created object. We want to leave our old state object intact.

> (...) [Single Source Of Truth] means that we have only one place (called Store) where we store the only state for the whole application. In other words, one app — one store — one state.

However, we normally don't want to put **everything** on the Store leaving some things on internal state's. Either way. design should aim having the main state centralized.

Thus, `Redux` is a better solution for scalable code because, when code gets much bigger and messier, state management stays isolated and can grow separately and in a controlled manner remaining easily accessed to the main app's components.

As we generally develop apps that are intended to grow and be scalable, it will be kind of default running `Redux`. In our case, as we are developing on React, `React Redux` will be our to-go library because it gathers the official React bindings for `Redux`!

More on redux can be found on the [References Section](#references) but I highly recommend [this previously mentioned article]((https://medium.com/javascript-in-plain-english/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6)) but also to check [Redux's own documentation](https://react-redux.js.org/introduction/quick-start).

#### Stores

The *store* is responsible for holding the application's state. It's actually an object and it may contain extra things like functions and other objects.

Despite the possibility of creating multiple *stores*, **it goes against the pattern that `Redux` follows**. There should be only one store per application.

We can subscribe to listen to events whenever the *store* updates, which is useful (to update the UI for instance).

#### Actions

*Actions* are plain `JavaScript` objects that describe state changes, but don't describe **how** the app state changes.

The idea of these *actions* is to dispatch (send) them to the store whenever we want to update the state of the application, the rest will be handled by the *reducers*.

One important thing when sending *actions* is to send along a `type` property. It will describe what kind of action we are dispatching and will be useful for the *reducers*.

#### Reducers

The *reducers* are **pure** functions that define how the application's state changes. They are used to recalculate the new application state.

After dispatching an *action* to our *store*, the *action* gets passed to the *reducer*, then the reducer calculates the new state based on the *action*'s type.

The important thing about *reducers* is that they take the newly created state and replace the old one with the new. Following this behavior, we maintain immutability of the *store*.

In a real-world application, your *reducers* most probably will get very complex.

### Asynchronous calls
A very interesting thing to complement with Redux are async calls. If you followed some of the previously mentioned documents, you'll know that when a component needs to change some Redux state calling a function to do so.

Async calls can be handled similarly. There are two libraries accomplish this: `Redux-Saga` and `Redux-Thunk`.

We won't be diving into both of them, we'll provide some articles that do that for us. We think that `Redux-Thunk` is the way to go for simple cases such as API calls, but when things get a more complicated `Redux-Saga` must be considered (and the learning curve as well)

#### Comparisons
- [Redux Thunk vs Redux Saga](https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d)
- [[Spanish] Saga vs Thunk](https://www.paradigmadigital.com/dev/sagas-vs-thunk/)

## Setup

```powershell
yarn add react-redux @types/react-redux
yarn add redux-thunk
```

Below we will copy our implementation of `Redux` available on `code`'s directory:
```ts
// src/modules/home/action.ts
import * as types from './types';

interface IHomeChangeLng {
  type: typeof types.HOME_CHANGE_LNG;
  payload: string;
}

export type HomeActions = IHomeChangeLng;

export const homeChangeLng = (language: string): IHomeChangeLng => ({
  type: types.HOME_CHANGE_LNG,
  payload: language
});
```

```ts
// src/modules/home/reducer.ts
import { HomeActions } from './actions';
import { IHomeState, INITIAL_STATE } from './state';
import * as types from './types';

export const HomeReducer = (state: IHomeState = INITIAL_STATE, actions: HomeActions): IHomeState => {
  switch (actions.type) {
    case types.HOME_CHANGE_LNG: {
      return {
        ...state,
        lng: actions.payload
      };
    }
    default:
      return state;
  }
};
```

```ts
// /src/store/index.ts
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import IStoreState from './IStoreState';

import { HomeReducer } from '../modules/home/reducer';

const reducers = combineReducers<IStoreState>({
  home: HomeReducer
});

export default createStore(reducers, applyMiddleware(thunk));
```

## References
- [The only introduction to Redux (and React-Redux) you'll ever need]((https://medium.com/javascript-in-plain-english/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6))
- [React Redux documentation](https://react-redux.js.org/introduction/quick-start).
- [React Redux for begginers](https://medium.com/javascript-in-plain-english/react-redux-for-beginners-d51b46cb6d58)
- [Understanding Redux: The World’s Easiest Guide to Beginning Redux](https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/)

### Libraries
- [React Context](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/)
    - [React Redux](https://react-redux.js.org/)
    - [Redux Saga](https://redux-saga.js.org/)
    - [Redux Thunk](https://github.com/reduxjs/redux-thunk)