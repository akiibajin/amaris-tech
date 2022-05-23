import { useAppSelector } from "../app/hooks";
import HomeTop from "../components/homeTop";
import { selectHomeTop } from "../features/homeTop/homeTopSlice";

export default function Home() {
  const {
    contentTitle,
    aHrefcontent,
    buttonStartContent,
    contentSpan,
    additionalContent,
  } = useAppSelector(selectHomeTop);
  return (
    <section className="home">
      <HomeTop
        contentTitle={contentTitle}
        contentSpan={contentSpan}
        buttonStartContent={buttonStartContent}
        aHrefcontent={aHrefcontent}
        additionalContent={additionalContent}
      />
    </section>
  );
}
