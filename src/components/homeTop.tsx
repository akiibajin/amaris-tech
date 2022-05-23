import React from "react";
import Button from "./helpers/Button";
import { Link, useNavigate } from "react-router-dom";
import { HomeTopInterface } from "../interfaces/home";
import { useAppDispatch } from "../app/hooks";
import { fetchHomeTopContent } from "../features/homeTop/homeTopAPI";
import "../styles/components/homeTop.scss"
export default function HomeTop({
  contentTitle,
  contentSpan,
  aHrefcontent,
  buttonStartContent,
  additionalContent,
}: HomeTopInterface) {
  const dispatch = useAppDispatch() 
  const navigate = useNavigate();
  const goingStartSection = () => {
    navigate("getting-started");
  };
  const imageExtension = new RegExp(
    "[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$"
  );
  React.useEffect(()=>{
    dispatch(fetchHomeTopContent())
  },[dispatch])
  return (
    <div className="home-top">
      <section className="home-top-efault-content">
      <h1 className="home-top-content-title">{contentTitle}</h1>
      <p className="home-top-content-span">{contentSpan}</p>
      <Button content={buttonStartContent} handleOnClick={goingStartSection} className="home-top-start-button" />
      <Link to="/custom-setting" style={{ textDecoration: "none" }}>
        <span>{aHrefcontent}</span>
      </Link>
      </section>
      <section className="additional-content-parent">
      {additionalContent &&
        additionalContent.map((content, index) => (
          <div className={`additional-child child-${index}`} key={content}>
            {imageExtension.test(content) ? (
              <img src={content} alt="no additional image founded" className="additional-top-home-images"/>
            ) : (
              <p>{content}</p>
            )}
          </div>
        ))}
        </section>
    </div>
  );
}
