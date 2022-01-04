import Header from "./components/Header";
import Carousel from "./components/Carousel";
import PrimaryButton from "./components/PrimaryButton";
import CountDown from "./components/CountDown";

import RoadMap from "./components/RoadMap";
import TeamCard from "./components/TeamCard";

import faqData from "./services/faq";

import team1 from "./assets/imgs/team/photo_2022-01-04_21-35-16.jpg";
import team2 from "./assets/imgs/team/photo_2022-01-04_21-35-29.jpg";
import team3 from "./assets/imgs/team/photo_2022-01-04_21-35-22.jpg";
import team4 from "./assets/imgs/team/photo_2022-01-04_21-35-24.jpg";

import FaqItem from "./components/FaqItem";

import discordIco from "./assets/imgs/logo/discord.svg";
import instaIco from "./assets/imgs/logo/instagram.svg";
import twitterIco from "./assets/imgs/logo/twitter.svg";
import linktreeIco from "./assets/imgs/logo/linktree.svg";
import blankImage from "./assets/imgs/blank-image.png";

import "./assets/css/header.css";
import "./assets/css/index.css";

const App = () => {
  const joinNow = () => {
    window.open("https://discord.com/invite/CyberSneakers", "_blank");
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <section className="hero">
          <h1 className="hero-title">JOIN THE CYBER SNEAKERS</h1>
          <PrimaryButton handleClick={joinNow}>JOIN NOW</PrimaryButton>
        </section>
        <section id="about" className="story">
          <div className="content">
            <div className="story-card">
              <div className="left">
                <h2 className="title">STORY</h2>
                <p className="desc">
                  In 2500, it's the presidential election in the metaverse!
                  Space News announces 51-49 for Cyber Elon but the Meta group
                  announces 49-51 for Cyber Zuck… <br />
                  <br />
                  On the eve of his last face to face with Cyber Zuck, Cyber
                  Elon decides to relax with his friend Cyber Idriss.
                  <br />
                  <br />
                  Cyber Idriss, the G.O.A.T designer of the metaverse then has
                  an idea: if not by politics, then Cyber Elon must win by
                  fashion
                  <br />
                  <br />
                  Cyber Idriss draw him a pair of Cyber Sneakers like never
                  before. Shoes capable of flying, of reaching a top speed of
                  300km / h, of jumping to more than 70 meters high ... But
                  beyond its unseen strengths, these Cyber Sneakers are super
                  stylish
                  <br />
                  <br />
                  During the next day debate, we clearly witness a show of force
                  of Cyber Elon. <br />
                  Habitants of the metaverse are estomached. After this event
                  the whole metaverse started looking for Cyber Sneakers.
                  Unfortunately, due to very, very rare materials, Cyber Ye was
                  only able to make 10,000, which he decided to put on sale on
                  OpenSea…
                </p>
                <PrimaryButton handleClick={joinNow}>JOIN NOW</PrimaryButton>
              </div>
              <div className="right">
                <img src={blankImage} alt="dummy_image" />
              </div>
            </div>
          </div>
          <Carousel />
          <CountDown label="MINT COUNTDOWN" countDownFrom="2022-01-10" />
        </section>
        <RoadMap />
        <section className="team-section content" id="team">
          <h1 className="title">TEAM PRESENTATION</h1>
          <div className="team">
            <TeamCard
              fullName="pierre"
              image={team1}
              links={{
                twitter: "https://twitter.com/PBarrafranca",
                insta: "https://instagram.com/pbarrafranca",
              }}
            />
            <TeamCard
              fullName="idriss"
              image={team2}
              links={{
                twitter: "https://twitter.com/idrissbcom",
                insta: "https://instagram.com/idrissbcom",
                tiktok: "https://www.tiktok.com/@idrissbcom",
              }}
            />
            <TeamCard
              fullName="yannick"
              image={team3}
              links={{
                twitter: "https://twitter.com/kamga_y",
                insta: "https://instagram.com/yannsw75",
              }}
            />
            <TeamCard
              fullName="sapir"
              image={team4}
              links={{ twitter: "http://www.twitter.com/CryptoQueenIL" }}
            />
          </div>
        </section>
        <section id="faq" className="faq">
          <h1 className="title">FAQ</h1>
          <div className="faq-wrapper">
            {faqData &&
              faqData.map((item, idx) => (
                <FaqItem
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
          </div>
        </section>
        <section className="comunity">
          <h1 className="title">JOIN THE COMUNITY</h1>
          <div className="comunity-link-wrapper">
            <a
              href="https://www.instagram.com/cybersneakersnft/"
              className="comunity-link"
            >
              <img src={instaIco} alt="" />
            </a>
            <a
              href="https://twitter.com/cyber_sneakers"
              className="comunity-link"
            >
              <img src={twitterIco} alt="" />
            </a>
            <a href="https://linktr.ee/cybersneakers" className="comunity-link">
              <img src={linktreeIco} alt="" />
            </a>
            <a
              href="https://discord.com/invite/CyberSneakers"
              className="comunity-link"
            >
              <img src={discordIco} alt="" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
