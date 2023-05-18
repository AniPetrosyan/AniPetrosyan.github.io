import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'WordPress'];
  const interviews = [
    { name: 'The Armenian Mirror-Spectator', url: 'https://mirrorspectator.com/2022/02/03/ani-petrosyan-hackathon-founder-and-it-extraordinaire/?fbclid=IwAR1S1tnDrQFJLWlC689hs_MQ7FWqL8xWql_uvtr_UCMB7RCZC849ZUtjMFU' },
    { name: 'Armenian Public TV', url: 'https://www.youtube.com/watch?v=t8xN-pjCdRs' },
    { name: 'UNICEF', url: 'https://www.unicef.org/armenia/en/stories/failures-only-give-you-chance-take-bigger-steps-fly-higher' },
    { name: 'Armenian Public TV again :)', url: 'https://www.youtube.com/watch?v=Jc11xRHZCZo' },
    { name: 'TUMO', url: 'https://www.youtube.com/watch?v=6PN6YoK72Kg' },
    { name: "Women's Fund", url: 'https://womenfundarmenia.wpcomstaging.com/%d5%a1%d5%b4%d5%a5%d5%b6-%d5%ab%d5%b6%d5%b9-%d5%a4%d6%80%d5%a1%d5%b6%d5%ab%d6%81-%d5%bd%d5%af%d5%bd%d5%be%d5%a5%d6%81-%d5%a5%d5%bd-%d5%b8%d6%80%d5%b8%d5%b7%d5%a5%d6%81%d5%ab%d5%9d-%d5%a3%d5%b6/?lang=hy&fbclid=IwAR1urMNX5R1XNjREocvmWloXi7p99jHuTIFRZmAcA_-1ZuDJpwcODZoGPgg' },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            I am an undergraduate student at the {' '}
              <a href="https://www.seas.upenn.edu/">University of Pennsylvania,</a>,
             School of Engineering and Applied Science, studying Computer Science with a 
             concentration in Data Science. At the age of 12, I learned programming which allowed me to incorporate technology 
             and science into every aspect of my waking life.
             I am passionate about applying Data Science and Artificial Intelligence to address pressing issues and make 
             a significant impact in various fields.

            </p>

            <p></p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul> 
<p></p>

          <p>Featured:
          </p>
          <ul className="skills-list">
            {interviews.map((interview, i) => (
              <li key={i}>
                <a href={interview.url}>{interview.name}</a>
              </li>
            ))}
          </ul>
          </div>
          
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
