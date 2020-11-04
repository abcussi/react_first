import {
  USER_SINGIN_SUCCESS,
  USER_SINGUP_SUCCESS
} from '../../constants/ActionTypes';


export const INIT_STATE = {
  dataUser: {},
  tokenUser: null,
}

const auth = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case USER_SINGIN_SUCCESS: {
      const { tokenUser, dataUser } = payload;

      return { ...state, tokenUser, dataUser: { ...dataUser } };
    }
    case USER_SINGUP_SUCCESS: {
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export default auth;