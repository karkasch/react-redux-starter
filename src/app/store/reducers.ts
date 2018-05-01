import { IAppState } from "./state";
import { IAction } from "./action";
import { AppActions } from "./actions";

export function stateReducer(state: IAppState, action: IAction): IAppState {
    let newState;

    switch(action.type) {
        case AppActions.LOAD_PROFILE_START:
            newState = { ...state, loadProgress: true };
            break;
        case AppActions.LOAD_PROFILE_COMPLETED:
            newState = { ...state, loadProgress: false, id: action.payload.id, userName: action.payload.userName };
            break;
        case AppActions.LOAD_PROFILE_FAILED:
            newState = { ...state, loadProgress: false };
            break;

        case AppActions.LOAD_CONTACTS_START:
            newState = { ...state, contacts: [] };
            break;
        case AppActions.LOAD_CONTACTS_COMPLETED:
            newState = { ...state, contacts: action.payload };
            break;
        default:
            return state;
    }

    console.log('New state: ' + action.type, newState);
    
    return newState;
}