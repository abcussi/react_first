import {
  UPDATE_USER_TYPE
} from '../../constants/ActionTypes';


export const initialState = {
  userTypes: []
}

const global = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_TYPE: {
      return { ...state, userTypes: [...payload] };
    }
    default:
      return { ...state };
  }
}

export default global;