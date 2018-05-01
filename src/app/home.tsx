import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IAppState } from './store/state';
import { IAction } from './store/action';

interface IHomeProps {
    name: string;
    propgress: boolean;
    comtactsCount: number;
}

interface IHomeState {

}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
  }

  public render() {
    return (
        <section>
          <div>Welcome, {this.props.name}</div>
          <div>You have {this.props.comtactsCount} contacts</div>
        </section>
    );
  }
}

export default connect(
    function (state: IAppState, ownProps: any): IHomeProps | Object {
      return {
        name: state.userName,
        propgress: state.loadProgress,
        comtactsCount: state.contacts == null ? -1 : state.contacts.length
      };
    },
    function (dispatch: Dispatch <IAction>) {
      return {
      }
    }
)(Home);