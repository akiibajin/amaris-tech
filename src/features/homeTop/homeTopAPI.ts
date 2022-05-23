import axios from "axios";
import { AppThunk } from "../../app/store";
import { HomeTopInterface } from "../../interfaces/home";
import { resetHomeTopContent, setErrors, setHomeTop } from "./homeTopSlice";

export function fetchHomeTopContent(): AppThunk {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/home-content/home-top",
        {withCredentials:true}
      );
      console.log(response.data)
      dispatch(setHomeTop(response.data));
    } catch (error) {
      console.error(error);
      alert("no user logged, log in to see your changes");
      dispatch(setErrors(String(error)));
      dispatch(resetHomeTopContent())
    }
  };
}

export function postHomeTopContent(formData: any): AppThunk {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/api/home-content/home-top", {
        homeTopContent: formData,
      }, {withCredentials:true});
      await fetchHomeTopContent();
    } catch (error) {
      alert("verified if you are logged");
      dispatch(setErrors(String(error)));
    }
  };
}
