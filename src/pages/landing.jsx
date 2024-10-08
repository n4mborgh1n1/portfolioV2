import React from 'react';
import './landing.scss';
import styles from '../global/global.scss';
import github from '../assets/images/github.png';
import logo from '../assets/images/logo.png';
import ParticleScene from '../../src/ParticleScene';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Landing = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-container">
                        <a href="/">
                            <img src={logo} alt="logo" className={'logo'}/>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <Card className={'card'}>
                    <h1 id="greeting">
                        Hi, I am <span className="highlight">Nam.</span>
                    </h1>
                    <p className="intro">
                        A <span className="highlight">Software Developer</span> from Berlin, <br /> blending aesthetics
                        and technology with <span className="highlight">passion</span>.
                    </p>
                    <div>
                        <Button className={'view-btn'} /* label={'VIEW PORTFOLIO'} */>VIEW PORTFOLIO
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>{' '}
                        </Button>
                    </div>
                </Card>
                <div className="skillSection" id="skills">
                    {/*  <h1 className="skillHeader">
                        A Heart For <span className="highlight">Frontend</span>
                    </h1> */}
                </div>
                <ParticleScene />
            </main>

            <footer>
                <div className={'icon-container'}>
                    <div className={'icon-container'}>
                        <img src={github} alt="github" className={'github-icon'} />
                        <a href="https://github.com/n4mborgh1n1" className={'github'}>
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
            <script src="https://unpkg.com/split-type"></script>
        </>
    );
};

export default Landing;
