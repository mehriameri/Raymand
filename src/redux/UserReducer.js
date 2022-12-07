import { ALL_USERS_DETAILS, USER_PROFILE_INFO } from "./ActionTypes";

const initState = {
  allUsersInfo: [],
  userProfileDetail: {}
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_USERS_DETAILS:
      // console.log(action.payload.userProfileDetail);
      return {
        ...state,
        allUsersInfo: [...action.payload.allUsersInfo],
      };
      break;
    case USER_PROFILE_INFO:
      // console.log(state.userProfileDetail.address);
      return {
        ...state,
        userProfileDetail: {
          ...action.payload.userProfileDetails,
          address: {
            ...action.payload.userProfileDetails.address,
            geo: { ...action.payload.userProfileDetails.address.geo }
          }
        },
      };
      break;
    default: return state
  }
};
export default UserReducer;
