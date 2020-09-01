/* selectors */
export const getUser = ({ user }) => user;

/* action name creator */
const reducerName = 'user';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const LOGIN = createActionName('LOGIN');
const LOGOUT = createActionName('LOGOUT');

/* action creators */
export const login = (payload) => ({ payload, type: LOGIN });
export const logout = (payload) => ({ payload, type: LOGOUT });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...statePart,
        logged: true,
      };
    }
    case LOGOUT: {
      return {
        ...statePart,
        logged: false,
      };
    }
    default:
      return statePart;
  }
};
