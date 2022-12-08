import axios from "axios";
import { ALL_USERS_DETAILS, USER_PROFILE_INFO } from "./ActionTypes";

export const allUsersDetails = (allUsersInfoDetail) => {
  return {
    type: ALL_USERS_DETAILS,
    payload: {
      allUsersInfo: allUsersInfoDetail, // allUsersInfo=[{},{}]
    },
  };
};
export const userProfileInfo = (userProfileDetail) => {
  return {
    type: USER_PROFILE_INFO,
    payload: {
      userProfileDetails: userProfileDetail, // userProfileDetail={}
    },
  };
};
export const userId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.ir/users/${id}`)
      .then((res) => {
        dispatch(userProfileInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
