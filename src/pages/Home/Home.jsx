import { Page1 } from "./Page1/Page1";
import { Page2 } from "./Page2/Page2";
import { Page3 } from "./Page3/Page3";
import ReactFullpage from "@fullpage/react-fullpage";
import "./home.scss";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const fullpages = [
  {
    id: 1,
    component: <Page1 />,
  },
  {
    id: 2,
    component: <Page2 />,
  },
  {
    id: 3,
    component: <Page3 />,
  },
];

export const Home = () => {
  return (
    <div className="home">
      <ReactFullpage
        debug
        navigation={true}
        sectionSelector={SECTION_SEL}
        render={() => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ component, id }) => (
              <div key={id} className={SEL}>
                {component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};
