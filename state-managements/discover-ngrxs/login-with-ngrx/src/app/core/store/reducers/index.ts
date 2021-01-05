import { routerReducer, RouterReducerState, RouterState } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromAuthenticate from '../../../features/authentications/store/reducers/authenticate.reducer';

export const routerReducerKey = 'router';
export interface ApplicationState {
  [fromAuthenticate.authenticateFeatureKey]: fromAuthenticate.AuthenticateState,
  [routerReducerKey]: RouterReducerState
}


export const reducers: ActionReducerMap<ApplicationState> = {
  [routerReducerKey]: routerReducer,
  [fromAuthenticate.authenticateFeatureKey]: fromAuthenticate.reducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {

    return (state, action) => {
      console.info('state before', state);
      console.info('action', action);

      return reducer(state, action); // we pass to the next reducer
    }
}

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [logger] : [];


// function authReducer(state, action): State {
//   // new version of the state to be created
// }

// reducer comes from reduce
// const wookies: { surname: string}[] = [];
// wookies.reduce()
