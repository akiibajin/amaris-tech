import { Link, useNavigate } from "react-router-dom";
import LogoSection from "./helpers/Logo";
import NavigationSection from "./helpers/Lists";
import Button from "./helpers/Button";
import "../styles/components/nav.scss";
import SvgIconSearch from "./helpers/SvgIconSearch";
import { PersonOutlined } from "@mui/icons-material"
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import { IconButton } from "@mui/material";

const pages = ["Sell", "Marketplace", "Community", "Analize", "Downloads"];
export default function Nav() {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate();
  const goingLogin = () => {
    navigate("login");
  };
  const goingGettingStarted = () => {
    navigate("getting-started");
  };
  return (
    <header>
      <nav>
        <ul className="list-parent">
          <li>
            <Link to="/">
            <LogoSection />
            </Link>
          </li>
          <li>
            <NavigationSection
              className="nav-pages"
              settingsList={pages}
              key={`nav-elements`}
            />
          </li>
          <li>
            <ul className="buttons-list">
              <li>
                {!user.age?<Button
                  className="log-in"
                  content="Log In"
                  handleOnClick={goingLogin}
                  key={`log in element`}
                />:
                <IconButton onClick={()=>navigate("profile")}>
                <PersonOutlined />
                </IconButton>
                }
              </li>
              <li>
                <Button
                  className="getting-started"
                  content="Get Started"
                  handleOnClick={goingGettingStarted}
                />
              </li>
              <li>
                <SvgIconSearch
                  className="header-search-icon"
                  key="header-search-icon"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
