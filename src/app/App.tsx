import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import './App.css';
import Header from './header';
import LeftMenu from './left-menu';
import { IAppState } from './store/state';
import { IAction } from './store/action';
import { AppActions } from './store/actions';

interface IAppComponentProps {
  name: string;
  loadProfile: () => void;
}

interface IComponentState {
}

class App extends React.Component<IAppComponentProps, IComponentState> {
  constructor(props: IAppComponentProps){
    super(props);
  }

  public componentDidMount() {
    this.props.loadProfile();
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <section>
          <LeftMenu />
          <div>Welcome, {this.props.name}</div>
        </section>
      </div>
    );
  }
}

export default connect(
  function (state: IAppState, ownProps: any): IAppComponentProps | Object {
    return {
      name: state.userName
    };
  },
  function (dispatch: Dispatch <IAction>) {
    return {
      loadProfile() {
        dispatch({ type: AppActions.LOAD_PROFILE_START, payload: null });

        window.setTimeout(() => {
          dispatch({
            type: AppActions.LOAD_PROFILE_COMPLETED,
            payload: { id: 733, userName: 'arkady', age: 111 }
          });
        }, 2000);
      }
    }
  }
)(App);
