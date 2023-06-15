import { useState } from "react";
import { Page1 } from './Page1/Main';
import { Page2 } from './Page2/Main';
import { Page3 } from './Page3/Main';
import { useSelector } from "react-redux";
import ReactFullpage from '@fullpage/react-fullpage';
import "./home.scss";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const originalColors = [
    "#ff5f45",
    "#0798ec",
    "#fc6c7c",
    "#435b71",
    "orange",
    "blue",
    "purple",
    "yellow"
];
const sectionsColor = [...originalColors];
const fullpages = [
    {
        id: 1,
        component: <Page1 />
    },
    {
        id: 2,
        component: <Page2 />
    },
    {
        id: 3,
        component: <Page3 />
    }
];

export const Home = () => {
    const { theme } = useSelector(state => state.app);

    return (
        <div className={`home ${theme.data}`}>
            <ReactFullpage
                debug /* Debug logging */
                navigation={true}
                sectionSelector={SECTION_SEL}
                sectionsColor={sectionsColor}
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
    )
};
