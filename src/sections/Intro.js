import React from 'react';
import IntroSection from '../components/IntroSection';
import ContactIcon from '../components/ContactIcon';
import TypingEffect from '../components/TypingEffect';
import SkillsSummary from '../components/SkillsSummary';

import ContactData from '../data/ContactData.json';

function Intro() {
    return (
        <IntroSection id={"Intro"}>
            <div className='intro'>

                <TypingEffect className="mb-2" tag="h1" typingSpeed={100}>
                    Bernard Simpson
                </TypingEffect>

                <TypingEffect className="text-secondary intro-subtitle mt-0" tag="h2" typingSpeed={50}>
                    Self-Empolyed Software Developer
                </TypingEffect>

                <p className='subtitle text-secondary'>
                    I’m a Software Engineer with over a decade of experience building web and mobile applications, from early full stack roles to senior positions. My career spans healthcare, e-commerce, mobile, and enterprise platforms, where I’ve specialized in creating scalable solutions, polished user experiences, and leading technical improvements. I thrive on collaboration, continuous learning, and delivering impactful software that solves real business challenges.
                </p>

                <SkillsSummary />
{/* 
                <div className='badge-container mt-4'>
                    <ContactIcon url={ContactData.LinkedIn.url} type={'LinkedIn'}>
                        <i className={ContactData.LinkedIn.iconClassName}></i>
                    </ContactIcon>

                    <ContactIcon url={ContactData.GitHub.url} type={'GitHub'}>
                        <i className={ContactData.GitHub.iconClassName}></i>
                    </ContactIcon>

                    <ContactIcon url={ContactData.Email.url} type={'Email'}>
                        <i className={ContactData.Email.iconClassName}></i>
                    </ContactIcon>
                </div> */}

            </div>
        </IntroSection>
    );
}

export default Intro;