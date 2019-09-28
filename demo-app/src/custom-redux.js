const createStore = (reducerFn) => {

  let currentState = undefined;
  const subscribers = [];

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducerFn(currentState, action);
      subscribers.forEach( callbackFn => callbackFn() );
    },
    subscribe: (callbackFn) => { subscribers.push(callbackFn); },
  };

};

const bindActionCreators = (actionsMap, dispatch) => {
  return Object.keys(actionsMap).reduce( (boundActionsMap, actionKey) => {
    boundActionsMap[actionKey] = (...params) => dispatch(actionsMap[actionKey](...params));
    return boundActionsMap;
  } , {});
};

export const { Provider, Consumer } = React.createContext(null);

export const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

  return PresentationalComponent => {

    class ContainerComponent extends React.Component {
      constructor(props) {
        super(props);
        this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
      }

      // creation
      componentDidMount() {
        this.storeUnsubscribe = this.props.store.subscribe(() => {
          // when state has occured...
          this.forceUpdate();
        });
      }

      // destruction
      componentWillUnmount() {
        this.storeUnsubscribe();
      }

      render() {
        const stateProps = mapStateToPropsFn(this.props.store.getState());
        return <PresentationalComponent {...this.dispatchProps} {...stateProps} />;
      }
    }

    return () => <Consumer>
      {(value) => <ContainerComponent store={value} />}
    </Consumer>;
  };

};