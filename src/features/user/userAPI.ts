import axios from "axios";
import { AppThunk } from "../../app/store";
import { IUser } from "../../interfaces/User";
import { setError, userLogin } from "./userSlice";

export const loginAction = (data: any, navigate:Function): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        data,
        { withCredentials: true }
      );
      dispatch(userLogin(response.data));
      navigate("/")
    } catch (error) {
      dispatch(setError(String(error)));
    }
  };
};

export const facebookLogin = (): AppThunk => {
  return async (dispatch) => {
    try {
      let timer: NodeJS.Timer | null | undefined = null;
      const facebookLoginUrl = "http://localhost:3000/api/user/facebooklogin";
      const newWindow = window.open(
        facebookLoginUrl,
        "_blank",
        "width=500, height=600"
      );
      if (newWindow) {
        timer = setInterval(async () => {
          if (newWindow.closed) {
            const response = await axios
              .post("/usuarios/inicioSesionFacebook", {data:"test"}, { withCredentials: true })
            dispatch(userLogin(response.data))  
            if (timer) clearInterval(timer);
          }
        });
      }
    } catch (error) {
        dispatch(setError(String(error)))
    }
  };
};