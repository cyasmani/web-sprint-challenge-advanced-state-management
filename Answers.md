1. What problem does the context API help solve?

- Helps solve the amount of boiler plate you need to get started with redux and prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-The Store contains state, actions contain data and a type property that get dispatched by the reducer, the reducer holds together the store and actions. It takes in state and action which then allow it to return a new object. The state is known as the single source of truth because it is always up to date with state. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is state that is accessible over the entire app, component state is state that is accessible to that specific component. You want to use component state when only that component needs that specific slice of state.  You want to use Application State when there are multiple components that need it. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Redux Thunk allows us to make asynchronous requests. It is a function that is returned from another function. It intercepts the action creator and if it is an action it fowards it to the reducer, if it is function then it invokes the dispatch function to it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

-Context API is my best bud. It is alot cleaner, easier to maintain than redux. You need to import reducers or Provider from redux. 
