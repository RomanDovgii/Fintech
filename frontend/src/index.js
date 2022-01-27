import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import StyledGlobal from "./styled-components/styled-global/styled-global";
import {createAPI} from './services/api';
import {AuthorizationStatus} from './utils/const';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/root-reducer';
import {requireAuthorization} from './store/actions/action';
import {composeWithDevTools} from 'redux-devtools-extension';
import {redirect} from "./store/middlewares/redirect";
import {Provider} from 'react-redux';
import {checkAuth} from "./store/actions/api-actions";


const api = createAPI(
  () => StorageEvent.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    // applyMiddleware(redirect)
  )
);

Promise.all([
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <StyledGlobal/>
      <App/>
    </Provider>,
    document.querySelector('#root')
  );
})
.catch((err) => {
  throw err;
});
