import { ALL_USERS_DETAILS, USER_PROFILE_INFO } from "./ActionTypes";

const initState = {
  allUsersInfoList: [],
  userProfileDetail: {},
};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_USERS_DETAILS:
      return {
        ...state,
        allUsersInfoList: [...action.payload.allUsersInfo],
      };
    case USER_PROFILE_INFO:
      return {
        ...state,
        userProfileDetail: { ...action.payload.userProfileDetails },
      };
    default:
      return state;
  }
};
export default UserReducer;
