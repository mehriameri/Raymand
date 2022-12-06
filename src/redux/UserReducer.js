import { ALL_USERS_DETAILS, USER_PROFILE_INFO } from "./ActionTypes";

const initState = {
  allUsersInfo: [],
  userProfileDetail:{}
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_USERS_DETAILS:
      console.log(state.allUsersInfo);
      return {
        ...state,
        allUsersInfo: action.payload.allUsersInfo,
      };
    case USER_PROFILE_INFO:
      console.log(state.userProfileDetail);
      return {
        ...state,
        userProfileDetail: action.payload.userProfileDetail,
      };
  }
};
export default UserReducer;
