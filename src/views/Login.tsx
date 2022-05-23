import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Facebook } from "@mui/icons-material"
import MUITextEditorControlled from "../components/helpers/MUITextEditorControlled";
import SubmitButton from "../components/helpers/SubmitButton";
import "../styles/views/login.scss"
import { useAppDispatch } from "../app/hooks";
import { loginAction, facebookLogin } from "../features/user/userAPI";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const handleOnSubmit = handleSubmit((data) => {
    dispatch(loginAction(data, navigate))
    reset()
  });
  const facebookLoginOnClick = () =>{
    dispatch(facebookLogin())
  }
  return (
    <section className="form-login-content">
      <form onSubmit={handleOnSubmit} className="form-login">
        <MUITextEditorControlled
          control={control}
          defaultValue=""
          type="email"
          errors={errors}
          label="your email"
          name="email"
          color="secondary"
          rules={{
            name: "email",
            rules: {
              required: { value: true, message: "your email is required" },
            },
          }}
        />
        <MUITextEditorControlled
          control={control}
          defaultValue=""
          type="password"
          errors={errors}
          label="your password"
          name="password"
          color="secondary"
          rules={{
            name: "password",
            rules: {
              required: { value: true, message: "Your pasword is required" },
            },
          }}
        />
        <SubmitButton className="submit-login" color="secondary" content="Log in" key="subtmit-login"/>
        <Button color="primary" variant="contained" onClick={facebookLoginOnClick} >
            <Facebook />
            Inicia con Facebook
          </Button>
      </form>
    </section>
  );
}
