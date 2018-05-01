import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IAppState } from './store/state';
import { IAction } from './store/action';

interface IHeaderProps {
    name: string;
    propgress: boolean;
}

class Header extends React.Component<IHeaderProps, {}> {

  public render() {
    const content = this.props.propgress ? <h1>Loading...</h1> : <h1 className="App-title">Welcome to demo, {this.props.name}</h1>;

    return (
        <header className="App-header">
          {content}
        </header>
    );
  }
}

export default connect(
    function (state: IAppState, ownProps: any): IHeaderProps | Object {
      return {
        name: state.userName,
        propgress: state.loadProgress
      };
    },
    function (dispatch: Dispatch <IAction>) {
      return {
      }
    }
)(Header);