import { authSlice } from "./slice";

const { actions: slice } = authSlice;
//*login action

//* argument e user theke phone no nicci
export const LoginAction = (phone) => (dispatch) => {
  dispatch(slice.setLogin(phone));
};

//*
export const LogoutAction = () => (dispatch) => {
  dispatch(slice.setLogout());
};
