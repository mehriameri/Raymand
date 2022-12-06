import axios from "axios";
import { ALL_USERS_DETAILS, USER_PROFILE_INFO } from "./ActionTypes";

export const allUsersDetails = (allUsersInfo) => {
  return {
    type: ALL_USERS_DETAILS,
    payload: {
      allUsersInfo: allUsersInfo, // userInfo=[{},{}]
    },
  };
};
export const userProfileInfo = (userProfileDetail) => {
  return {
    type: USER_PROFILE_INFO,
    payload: {
      userProfileDetail: userProfileDetail, // userInfo=[{},{}]
    },
  };
};
export const userId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.ir/users/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(userProfileInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
