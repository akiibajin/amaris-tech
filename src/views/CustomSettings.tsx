import React from "react";
import {  useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import MUITextEditorControlled from "../components/helpers/MUITextEditorControlled";
import SubmitButton from "../components/helpers/SubmitButton";
import { postHomeTopContent } from "../features/homeTop/homeTopAPI";
import { selectHomeTop } from "../features/homeTop/homeTopSlice";
import "../styles/views/customSettings.scss"
export default function CustomSettings() {
  const {
    aHrefcontent,
    buttonStartContent,
    contentSpan,
    contentTitle,
    additionalContent,
  } = useAppSelector(selectHomeTop);
  const [additionalContentFields, setAdditionalContentFields] = React.useState<string[]>([])
  const dispatch = useAppDispatch();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const handleOnSubmit = handleSubmit((data) => {
    dispatch(postHomeTopContent(data));
    console.log(data)
    reset();
  });
  return (
    <section className="form-container">
      <form onSubmit={handleOnSubmit} className="form-custom-settings">
        <MUITextEditorControlled
          control={control}
          defaultValue={contentTitle}
          errors={errors}
          color="secondary"
          label="You can change the title Here!"
          name="contentTitle"
          rules={{
            name: "contentTitle",
            rules: {
              required: { value: true, message: "Field Required" },
            },
          }}
        />
        <MUITextEditorControlled
          control={control}
          defaultValue={contentSpan}
          errors={errors}
          label="You can change the description Here!"
          name="contentSpan"
          color="secondary"
          rules={{
            name: "contentTitle",
            rules: {
              required: { value: true, message: "Field Required" },
            },
          }}
        />
        <MUITextEditorControlled
          control={control}
          defaultValue={buttonStartContent}
          errors={errors}
          color="secondary"
          label="You can change the button text Here"
          name="buttonStartContent"
          rules={{
            name: "buttonStartContent",
            rules: {
              required: { value: true, message: "Field Required" },
            },
          }}
        />
        <MUITextEditorControlled
          control={control}
          defaultValue={aHrefcontent}
          errors={errors}
          color="secondary"
          label="You can change the Hyperlink Here"
          name="aHrefcontent"
          rules={{
            name: "aHrefcontent",
            rules: {
              required: { value: true, message: "Field Required" },
            },
          }}
        />
        <MUITextEditorControlled
          control={control}
          defaultValue=""
          errors={errors}
          label="You can add extra information or Imgs Here"
          name="additionalContent"
          color="secondary"
          rules={{
            name: "additionalContent",
            rules: {
              required: { value: true, message: "Field Required" },
            },
          }}
        />
        <SubmitButton 
        className="home-top-submit"
        color="secondary"
        content="Update the first Section!"
        />
      </form>
    </section>
  );
}
