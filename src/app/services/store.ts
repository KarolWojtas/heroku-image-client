
import { SET_USER, UNSET_USER, ADD_ALERT, REMOVE_ALERT, REMOVE_ALL_ALERTS } from "./actions";
import { tassign } from 'tassign';
import { Alert, AlertType } from "./domain";

export interface User {
    firstName: string;
    lastName: string;
    username: string;
    role: string;
    email: string;
}
export interface IAppState {
    user: User;
    isUserLoggedIn: boolean;
    alerts: Alert[];
}
export const BASE_URL ='https://karol-auth-server.herokuapp.com'
export const INITIAL_STATE: IAppState = {
    user: {
        firstName: 'Stranger',
        lastName: undefined,
        username: undefined,
        role: undefined,
        email: undefined
    },
    isUserLoggedIn: false,
    alerts: [
             {id:1,message: 'Tutaj wyświetlane będą powiadomnienia. Możesz je zamknąć krzyżykiem', type: AlertType.INFO, date: new Date()}
         ]
}
export function rootReducer( state: IAppState, action ): IAppState {
    switch ( action.type ) {
        case SET_USER: return setUser( state, action );
        case UNSET_USER: return unsetUser( state, action );
        case ADD_ALERT: return addAlert(state, action);
        case REMOVE_ALERT: return removeAlert(state, action);
        case REMOVE_ALL_ALERTS: return removeAllAlerts(state, action);
        default: return state;
    }

}
function setUser( state: IAppState, action: any ) {
    return tassign( state, { user: action.user, isUserLoggedIn: true } );
}
function unsetUser( state: IAppState, action: any ) {
    return tassign( state, {
        user: {
            firstName: 'Stranger',
            lastName: undefined,
            username: undefined,
            role: undefined,
            email: undefined
        }

        , isUserLoggedIn: false
    } );
}
function addAlert(state: IAppState, action: any){
    
    let index =state.alerts.length < 1 ? 1 : 1+ Math.max(...state.alerts.map(alert=> {return alert.id}));
    let newAlert = action.alert;
    newAlert['id'] = index;
    return tassign(state, {
        alerts: [...state.alerts,newAlert]
    })
}
function removeAlert(state: IAppState, action: any){
    let arrayStart = state.alerts.filter(alert => alert.id<action.alertId);
    let arrayEnd = state.alerts.filter(alert => alert.id>action.alertId);
    
    return tassign(state, {alerts :[...arrayStart,...arrayEnd]})
}
function removeAllAlerts(state: IAppState, action: any){
    return tassign(state, {alerts: []});
}
