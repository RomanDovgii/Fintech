import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appState} from './app-state/app-state';
import {user} from './user/user';
import {NameSpace} from '../../utils/const';

export default combineReducers({
    [NameSpace.DATA]: appData,
    [NameSpace.STATE]: appState,
    [NameSpace.USER]: user
});