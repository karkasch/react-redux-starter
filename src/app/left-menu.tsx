import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IAppState, IContact } from './store/state';
import { IAction } from './store/action';
import { AppActions } from './store/actions';


interface ILeftMenuProps {
    contacts: IContact[];
    loadContacts: () => void;
}

interface ILeftMenuState {
}

class LeftMenu extends React.Component<ILeftMenuProps, ILeftMenuState> {
    constructor(props: ILeftMenuProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.loadContacts();
    }

    public render() {

        if (!this.props.contacts) {
            return (
                <div>(No data)</div>
            );
        }

        return (
            <div style={{ width: '330px', float: 'left', textAlign: 'left', margin: '20px' }}>
                <h2>Contacts</h2>
                <ol>
                {
                    this.props.contacts.map((item: IContact, index: number) => {
                        return <li key={index}>Name: {item.name}</li>
                    })
                }
                </ol>
            </div>
        );
    }
}

export default connect(
    function (state: IAppState, ownProps: any): ILeftMenuProps | Object {
        return {
            contacts: state.contacts
        };
    },
    function (dispatch: Dispatch <IAction>) {
        return {
            loadContacts() {
                dispatch({ type: AppActions.LOAD_CONTACTS_START, payload: null });

                window.setTimeout(() => {
                    dispatch({
                        type: AppActions.LOAD_CONTACTS_COMPLETED,
                        payload: [
                            { name: 'User 1' },
                            { name: 'Jaap' },
                            { name: 'David' },
                            { name: 'Lukas' },
                            { name: 'Donald :)' }
                        ]
                    });
                }, 3500);
            }
        }
    }
)(LeftMenu);