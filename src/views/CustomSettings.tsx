import { Button } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import MUITextEditorControlled from "../components/helpers/MUITextEditorControlled";
import SubmitButton from "../components/helpers/SubmitButton";
import { postHomeTopContent } from "../features/homeTop/homeTopAPI";
import { selectHomeTop } from "../features/homeTop/homeTopSlice";
import "../styles/views/customSettings.scss";
import { keyboard } from "@testing-library/user-event/dist/types/keyboard";
export default function CustomSettings() {
  const {
    aHrefcontent,
    buttonStartContent,
    contentSpan,
    contentTitle,
    additionalContent,
  } = useAppSelector(selectHomeTop);
  const [additionalContentFields, setAdditionalContentFields] = React.useState<
    number[]
  >([]);
  const dispatch = useAppDispatch();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const handleOnSubmit = handleSubmit((data: any) => {
    data.additionalContent = Object.entries(data)
      .filter((element) => {
        const [key, value] = element;
        return key.includes("additionalContent-");
      })
      .map((element) => {
        const [key, value] = element;
        return value;
      });
    dispatch(postHomeTopContent(data));
    console.log(data);
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
        {additionalContent &&
          additionalContent.map((content, index) => (
            <MUITextEditorControlled
              key={content}
              control={control}
              defaultValue={content}
              errors={errors}
              label="You can add extra information or Imgs Here"
              name={`additionalContent-${index}`}
              color="secondary"
              rules={{
                name: "additionalContent",
                rules: {
                  required: { value: true, message: "Field Required" },
                },
              }}
            />
          ))}
        {additionalContentFields &&
          additionalContentFields.map((content, index) => (
            <MUITextEditorControlled
              key={content+index+1}
              control={control}
              defaultValue=""
              errors={errors}
              label="You can add extra information or Imgs Here"
              name={`additionalContent-${
                additionalContent?.length ?? additionalContentFields.length + 1
              }`}
              color="secondary"
              rules={{
                name: "additionalContent",
                rules: {
                  required: { value: true, message: "Field Required" },
                },
              }}
            />
          ))}
        <Button
          onClick={() =>
            setAdditionalContentFields((content) => [
              ...content,
              additionalContentFields.length + 1,
            ])
          }
        >
          <AddBox />
          Add Content
        </Button>
        <SubmitButton
          className="home-top-submit"
          color="secondary"
          content="Update the first Section!"
        />
      </form>
    </section>
  );
}
