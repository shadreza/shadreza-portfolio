import React from 'react';
import AboutMeInHomePage from '../AboutMeInHomePage/AboutMeInHomePage';
import Expertise from '../Expertise/Expertise';
import Intro from '../Intro/Intro';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Homepage.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


const Homepage = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <div className="homepageDiv">
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 200))}>
                        <Intro></Intro>
                    </Animator>
                </ScrollPage>
                <AboutMeInHomePage></AboutMeInHomePage>
                <br/><br/><br/>
                <Expertise></Expertise>
            </ScrollContainer>
            <SocialLinks></SocialLinks>
        </div>
    );
};

export default Homepage;