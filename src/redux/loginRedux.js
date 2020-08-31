/* selectors */
export const logged = (state) => state.logged;

/* action name creator */
const reducerName = 'toggle_login';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_LOGIN = createActionName('TOGGLE_LOGIN');

/* action creators */
export const toggle_login = payload => ({ payload, type: TOGGLE_LOGIN });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      switch (action.payload) {
        case 'login': return true;
        case 'logout': return false;
        default:
          return statePart;
      }
    default:
      return statePart;
  }
}
