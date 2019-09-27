// const createStore = (reducerFn) => {

//   let currentState = undefined;
//   const subscribers = [];

//   return {
//     getState: () => currentState,
//     dispatch: (action) => {
//       currentState = reducerFn(currentState, action);
//       subscribers.forEach( callbackFn => callbackFn() );
//     },
//     subscribe: (callbackFn) => { subscribers.push(callbackFn); },
//   };

// };

// const bindActionCreators = (actionsMap, dispatch) => {
//   return Object.keys(actionsMap).reduce( (boundActionsMap, actionKey) => {
//     boundActionsMap[actionKey] = (...params) => dispatch(actionsMap[actionKey](...params));
//     return boundActionsMap;
//   } , {});
// };