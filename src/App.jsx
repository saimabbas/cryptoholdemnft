import React, { useEffect } from "react";
import Maria from "./assets/maria.jpg";
import Banner1 from "./assets/banner-1.png";
import Banner2 from "./assets/banner-2.png";
import Banner3 from "./assets/banner-3.png";
import Banner4 from "./assets/banner-4.png";
import Logo from "./assets/Logo/Logo1.png";
import Artwork1 from "./assets/Artwork/Artwork1.jpeg";
import Artwork2 from "./assets/Artwork/Artwork2.jpeg";
import Artwork3 from "./assets/Artwork/Artwork3.jpeg";
import Artwork4 from "./assets/Artwork/Artwork4.jpeg";
import Artwork5 from "./assets/Artwork/Artwork5.jpeg";
import Artwork6 from "./assets/Artwork/Artwork6.jpeg";
import Artwork7 from "./assets/Artwork/artwork8.png";
import Team1 from "./assets/Team/Team1.jpg";
import Team2 from "./assets/Team/Team2.jpg";
import Team3 from "./assets/Team/Team3.jfif";
import Team4 from "./assets/Team/Team4.jfif";
import "./App.css";
import $ from "jquery";
import { BsSuitSpadeFill, BsFillSuitDiamondFill } from "react-icons/bs";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdMenu, MdClose, MdExpandMore, MdEast } from "react-icons/md";
import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    $(".mob-header-open").click(() => {
      $(".mob-header").css({
        display: "flex",
      });
      $(".mob-header-open").css({
        display: "none",
      });
      $(".mob-header-close").css({
        display: "flex",
      });
    });
    $(".mob-header-close").click(() => {
      $(".mob-header").css({
        display: "none",
      });
      $(".mob-header-open").css({
        display: "flex",
      });
      $(".mob-header-close").css({
        display: "none",
      });
    });
  }, []);

  /* Desktop Anchoring Funtions */

  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 0,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 30,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 30,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 30,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo6 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section6",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo7 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section7",
        offsetY: 30,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo8 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section8",
        offsetY: 30,
      },
      ease: Power4.easeInOut,
    });
  };

  // Mobile Anchoring Functions

  const moveTo1Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo2Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo3Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo4Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo5Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo6Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section6",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo7Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section7",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo8Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section8",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };

  /* Custom FAQ accordians */
  const q1 = () => {
    $(".a1").slideToggle(350);
    $(".q1 svg").toggleClass("rotate");
  };
  const q2 = () => {
    $(".a2").slideToggle(350);
    $(".q2 svg").toggleClass("rotate");
  };
  const q3 = () => {
    $(".a3").slideToggle(350);
    $(".q3 svg").toggleClass("rotate");
  };
  const q4 = () => {
    $(".a4").slideToggle(350);
    $(".q4 svg").toggleClass("rotate");
  };
  const q5 = () => {
    $(".a5").slideToggle(350);
    $(".q5 svg").toggleClass("rotate");
  };
  const q6 = () => {
    $(".a6").slideToggle(350);
    $(".q6 svg").toggleClass("rotate");
  };
  const q7 = () => {
    $(".a7").slideToggle(350);
    $(".q7 svg").toggleClass("rotate");
  };
  const q8 = () => {
    $(".a8").slideToggle(350);
    $(".q8 svg").toggleClass("rotate");
  };

  return (
    <div className="cryptoholdemnft" id="section1">
      {/* Header */}
      <div className="header">
        <div className="mob-header">
          <a onClick={moveTo1Mob}>Welcome</a>
          <a onClick={moveTo2Mob}>Utility</a>
          <a onClick={moveTo3Mob}>Specs</a>
          <a onClick={moveTo4Mob}>Roadmap</a>
          <a onClick={moveTo5Mob}>Mint</a>
          <a onClick={moveTo6Mob}>Poker Ambassador</a>
          <a onClick={moveTo7Mob}>Team</a>
          <a onClick={moveTo8Mob}>FAQ</a>
        </div>
        <div className="box">
          <div className="header-content">
            <img className="header-left" src={Logo} alt="img" />

            <div className="header-right-parent">
              <div className="header-right">
                <a onClick={moveTo1}>Welcome</a>
                <a onClick={moveTo6}>Poker Ambassador</a>
                <a onClick={moveTo2}>Utility</a>
                <a onClick={moveTo3}>Specs</a>
                <a onClick={moveTo4}>Roadmap</a>
                <a onClick={moveTo5}>Mint</a>
                <a onClick={moveTo7}>Team</a>
                <a onClick={moveTo8}>FAQ</a>
              </div>
              <a href="https://discord.gg/pCWB6bEg7F">
                <FaDiscord />
              </a>
              <div className="header-right-mob">
                <MdMenu className="mob-header-open" />
                <MdClose className="mob-header-close" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="box">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="russo">Welcome to Crypto Holdem</h1>
              <main>
                <img src={Artwork3} alt="Artwork"></img>
                <img src={Artwork3} alt="Artwork"></img>
              </main>
              <h2 className="russo">
                Where Your Starting Hand Could Win Massive Prizes.
                <br />
                The more hands you collect, the better your chances are of
                winning prizes and poker access like never before.
              </h2>
              <div className="heroleft-img">
                <img src={Artwork1} alt="Artwork" />
                <img src={Artwork2} alt="Artwork" />
                <img src={Artwork7} alt="Artwork" />
                <img src={Artwork4} alt="Artwork" />
              </div>
              <h2 className="russo">
                Our game-changing No-Limit Texas Holdem NFT will give you real
                life game utility like never before.
              </h2>
              {/* <ul>
                <li>
                  $1,000,000 distributed back to Crypto Holdem Holders in 2022
                </li>
                <li>$250,000 on Mint Day</li>
                <li> $25,000 to 1:1 “Diamond Hands Pocket Aces”</li>
                <li> $10,000 to 9 “WSOP Final Table” Starting Hands</li>
                <li>
                  3 Fully Paid Entries into 2022 World Series of Poker Main
                  Event (entry, airfare, hotel)
                </li>
                <li>
                  Entry to the 2022 Crypto Holdem Poker Tournament in Las Vegas
                </li>
                <li>3% Redistributed back to Crypto Holdem Holders</li>
                <li>1:1 Training from WPT Poker Professionals </li>
                <li>Las Vegas and Los Angeles Private Poker Events</li>
                <li>VIP Poker Access across the World</li>
                <li>And so much more…</li>
              </ul> */}
            </div>
            {/* <div className="hero-right">
              <img src={Artwork3} alt="Artwork"></img>
            </div> */}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="description grd-parent-container">
        <img src={Banner3} className="grd-img" alt="" />
        <div className="grd-overlay-box-green section">
          <div className="box">
            <div className="utility-grid-1">
              <div className="ug1-left">
                <h2 className="russo">
                  Game-Changing Crypto Holdem Holder Rewards
                </h2>
                <ul>
                  <li>
                    $1,00,000 redistributed back to our Crypto Holdem Holders in
                    2022
                  </li>
                  <li>$250,000 on Mint Day</li>
                  <li> $25,000 to 1:1 “Diamond Hands Pocket Aces”</li>
                  <li> $10,000 to 9 “WSOP Final Table” Starting Hands</li>
                  <li>
                    3 Fully Paid Entries into 2022 World Series of Poker Main
                    Event (entry, airfare, hotel)
                  </li>
                </ul>
              </div>
              <div className="ug1-right">
                <main>
                  <img src={Artwork1} alt="Artwork" />
                </main>
              </div>
            </div>
            <div className="utility-grid-1">
              <div className="ug1-right">
                <main>
                  <img src={Artwork2} alt="Artwork" />
                </main>
              </div>
              <div className="ug1-left">
                <ul>
                  <li>
                    Entry to the 2022, 2023 and 2024 Crypto Holdem Tournament in
                    Las Vegas
                  </li>
                  <li>1:1 Training from WPT Poker Professionals</li>
                  <li>
                    Access to Las Vegas and Los Angeles Private Poker Events
                  </li>
                  <li>VIP Poker Access Across the World</li>
                  <li>And so much more…</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambassador Section */}
      <div className="amb section" id="section6">
        <div className="box">
          <div className="amb-content">
            <div className="amb-grid">
              <img src={Maria} alt="" />
              <div className="amb-grid-right">
                <h2 className="russo">Poker Ambassador - Maria Ho</h2>
                <p>
                  To make sure we are honoring the game we all love and
                  optimizing the gameplay experience, we’ve enlisted the help of
                  our Poker Ambassador, none other than WPT Hall of Famer Maria
                  Ho.
                  <br />
                  <br />
                  Maria will be hosting our Utility Gameplay poker hands,
                  answering your poker questions in our Twitter and Discord
                  communities, attending Crypto Holdem Events, and even playing
                  live, in-person poker games with our Crypto Holdem community
                  in Las Vegas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Utility Section */}
      <div className="utility section" id="section2">
        <h6 className="section-heading">
          <BsFillSuitDiamondFill />
          Real Life Poker Utility
          <BsFillSuitDiamondFill />
        </h6>
        <div className="box">
          <div className="utility-content">
            <div className="utility-grid-2">
              <div className="ug2-left">
                <img src={Artwork1} alt="Artwork" />
              </div>
              <div className="ug2-right">
                <h2 className="russo">How Does Crypto Holdem work?</h2>
                <p>
                  There are 1,326 potential unique starting hands in No-Limit
                  Texas Holdem. Crypto Holdem will utilize 7 decks of cards to
                  create 9,282 “hole cards.” <br />
                  Your one-of-a-kind digital art will act are you starting hand.{" "}
                  <br />
                  The more starting hands you MINT, the better your odds are of
                  winning. <br />
                  From there, Maria Ho will conduct weekly on-camera poker hands
                  via our social media channels and your starting hand could win
                  you instant prizes! <br />
                  Don’t like the hand you were dealt? Don’t fold it, trade it!{" "}
                  <br />
                  Prior to the FLOP, TURN and the RIVER, we will allow 10
                  minutes, between each card (30 minutes total), for trades via
                  OpenSea. Once the RIVER card is dealt, winners will be chosen
                  based on their winning hands and that week’s rarity score.
                  <br />
                  <br />
                  <i>
                    The Crypto Holdem Team will set aside $1,000,000 from MINT
                    day sales to redistribute back into the Community.
                  </i>
                  <br />
                  <i>
                    Additionally, 3% of all royalty sales from OpenSea will be
                    redistributed back into the Community as well.
                  </i>
                  <br />
                  <i>
                    This is not your typical small poker game, this is the big
                    leagues…
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div className="specs grd-parent-container" id="section3">
        <img src={Banner4} className="grd-img" alt="" />
        <div className="grd-overlay-box-green section">
          <div className="box">
            <div className="specs-content">
              <h6 className="section-heading">
                <BsFillSuitDiamondFill />
                Specs <BsFillSuitDiamondFill />
              </h6>
              <p>
                Every Crypto Holdem "Whole cards" are unique and
                programmatically generated with 13 possible traits, including
                the hand, backdrop, table, lucky charm, accessories and more.
                <br />
                <br />
                Crypto Holdem NFTs are stored as ERC-721 tokens on the Ethereum
                blockchain and hosted on IPFS. Purchase price information is
                located in the #FAQ section of our Discord.
                <br />
                <br />
                Members-only areas such as{" "}
                <a href="https://discord.gg/HRk9gnScQ4">(HOLDEM HOLDERS)</a>,
                will require verification using proof of ownership with their
                Metamask Wallet.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap section" id="section4">
        <div className="box">
          <h6 className="section-heading">
            <BsFillSuitDiamondFill /> Road Map
            <BsFillSuitDiamondFill />
          </h6>
          <div class="roadmap-content">
            <div class="road-map-line"></div>
            <div class="roadmap-box-left">
              <div class="roadmap-box-content">
                <div class="roadmap-text-box">
                  <h6>20% Sold</h6>
                  <p>
                    We fund our two charities chosen by both the Crypto Holdem
                    Team and our community.
                  </p>
                </div>
                <div class="roadmap-circle">1</div>
              </div>
            </div>
            <div class="roadmap-box-right">
              <div class="roadmap-box-content">
                <div class="roadmap-circle">2</div>
                <div class="roadmap-text-box">
                  <h6>50% Sold</h6>
                  <p>
                    A VIP Merch Line will launch. Expect everything from hats,
                    beanies, t-shirts, hoodies, poker cards, poker tables, and
                    even apparel for your little poker players! Initially,
                    merchandise will exclusively be made for Crypto Holdem
                    Holders.
                  </p>
                </div>
              </div>
            </div>
            <div class="roadmap-box-left">
              <div class="roadmap-box-content">
                <div class="roadmap-text-box">
                  <h6>75% Sold</h6>
                  <p>
                    Announcement of the 2022 Crypto Holdem Poker Tournament in
                    Las Vegas.
                  </p>
                </div>
                <div class="roadmap-circle">3</div>
              </div>
            </div>
            <div class="roadmap-box-right">
              <div class="roadmap-box-content">
                <div class="roadmap-circle">4</div>
                <div class="roadmap-text-box">
                  <h6>90% Sold</h6>
                  <p>
                    Announcement of 1st Crypto Holdem Utility Gameplay Event
                  </p>
                </div>
              </div>
            </div>
            <div class="roadmap-box-left">
              <div class="roadmap-box-content">
                <div class="roadmap-text-box">
                  <h6>100% Sold</h6>
                  <p>$250,000 Mint Day Giveaway to Crypto Holdem Holders</p>
                  <br />
                  <ul>
                    <li>1- Audemars Piguet Rose Gold Exclusive Watch</li>
                    <li>$150,000 in cash (ETH equivalent)</li>
                    <li>Unprecedented 1:1 access to WPT Champions.</li>
                    <li>And much more</li>
                  </ul>
                </div>
                <div class="roadmap-circle">5</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mint Section */}
      <div className="mint grd-parent-container" id="section5">
        <img src={Banner3} className="grd-img" alt="" />
        <div className="grd-overlay-box-green section">
          <div className="box">
            <div className="mint-content">
              <h6 className="section-heading">
                <BsFillSuitDiamondFill /> January 2022 Launch{" "}
                <BsFillSuitDiamondFill />
              </h6>
              <p>Whale Pre-Sale @ TBD</p>
              <p>Whitelist @ TBD</p>
              <p>Public Sale @ TBD</p>
              <br />
              <p>
                <a href="">
                  <FaDiscord />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team section" id="section7">
        <div className="box">
          <div className="team-section">
            <h6 className="section-heading">
              <BsFillSuitDiamondFill />
              Meet the Team <BsFillSuitDiamondFill />
            </h6>
            <div className="team-grid">
              <div className="team-card">
                <img src={Team1} alt="Team Member" />
                <h2>Joe C.</h2>
                <h3>CEO</h3>
                <main>
                  <a href="https://twitter.com/kpjoe18">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com/in/joseph-cameron-38a15018b/">
                    <FaLinkedinIn />
                  </a>
                </main>
              </div>
              <div className="team-card">
                <img src={Team4} alt="Team Member" />
                <h2>Josh W.</h2>
                <h3>COO</h3>
                <main>
                  <a href="https://twitter.com/_JoshWilson">
                    <FaTwitter />
                  </a>
                  <a href=" https://www.linkedin.com/in/joshuawilson1/">
                    <FaLinkedinIn />
                  </a>
                </main>
              </div>
              <div className="team-card">
                <img src={Team2} alt="Team Member" />
                <h2>Kenny S. </h2>
                <h3>CTO</h3>
                <main>
                  <a href="https://www.instagram.com/kennybsanders/">
                    <FaInstagram />
                  </a>
                </main>
              </div>
              <div className="team-card">
                <img src={Team3} alt="Team Member" />
                <h2>Jon G.</h2>
                <h3>CDO</h3>
                <main>
                  <a href="https://www.instagram.com/jonlgagnon/">
                    <FaInstagram />
                  </a>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="faq section" id="section8">
        <div className="box">
          <div className="faq-content">
            <h6 className="section-heading">
              {" "}
              <BsFillSuitDiamondFill />
              Frequently Asked Questions <BsFillSuitDiamondFill />
            </h6>
            <div className="faq-q-a">
              <div className="faq-box" onClick={q1}>
                <div className="faq-q q q1">
                  <h6>What are the MINT Prices?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a1 a">
                  <ul>
                    <li>Whale Pre-Sale- TBD</li>
                    <li>Whitelist- TBD</li>
                    <li>Public Sale- TBD</li>
                    <li>
                      Please join our{" "}
                      <a href="https://discord.gg/pCWB6bEg7F">
                        Discord Channel
                      </a>{" "}
                      for updates regarding this in the coming weeks.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="faq-box" onClick={q2}>
                <div className="faq-q q q2">
                  <h6>Where can I see my Crypto Holdem NFT?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a a2">
                  <h6>
                    Once minted, you will be able to view your NFT in your
                    crypto wallet once you connect to Opensea.io
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q3}>
                <div className="faq-q q q3">
                  <h6>How many Crypto Holdem NFTs can I mint?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a3 a">
                  <h6>
                    Whale Pre-sale members will be able to mint 3 Crypto Holdem
                    NFTs.
                    <br />
                    White-list members will be able to mint 1 Crypto Holdem NFT.
                    <br />
                    Public Mint members will be able to mint 3 Crypto Holdem
                    NFTs.
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q4}>
                <div className="faq-q q q4">
                  <h6>Where does Crypto Holdem donate to?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a4 a">
                  <h6>
                    The Crypto Holdem community will decide upon a reputable
                    charity to donate to after mint.
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q5}>
                <div className="faq-q q q5">
                  <h6>How can you contact the Team?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a5 a">
                  <h6>
                    <a href="https://discord.gg/pCWB6bEg7F">
                      https://discord.gg/pCWB6bEg7F
                    </a>
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q6}>
                <div className="faq-q q q6">
                  <h6>Do you have a Discord group?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a6 a">
                  <h6>
                    Yes, <a href="https://discord.gg/pCWB6bEg7F">click here.</a>
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q7}>
                <div className="faq-q q q7">
                  <h6>Are there secondary sale royalties?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a7 a">
                  <h6>
                    Yes, there will be a 10% OpeSea royalty, with 3% going back
                    to the Crypto Holdem holder community through prizes,
                    meetups, parties, pot disbursements, and much more.
                  </h6>
                </div>
              </div>
              {/* <div className="faq-box" onClick={q8}>
                <div className="faq-q q q8">
                  <h6>Crypto Currency FAQs</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a8 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="box">
          <div className="footer-content">
            <div className="footer-left">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-center">
              <h2>Get on the List</h2>
              <main>
                <input type="text" placeholder="Email Address" />
                <button>
                  <MdEast />
                </button>
              </main>
            </div>
            <div className="footer-right">
              <span>
                <a href="https://www.youtube.com/channel/UCLIhq1B9PjXD74-6f54UgLw">
                  <FaYoutube />
                </a>
                <a href="https://www.reddit.com/r/Crypto_HoldemNFT/">
                  <FaRedditAlien />
                </a>
                <a href="https://www.instagram.com/cryptoholdemnft/">
                  <FaInstagram />
                </a>
                <a href="https://discord.gg/pCWB6bEg7F">
                  <FaDiscord />
                </a>
                <a href="https://twitter.com/CryptoholdemNFT">
                  <FaTwitter />
                </a>
              </span>
              <p>© 2021 Crypto Holdem</p>
              <a>Crypto Holdem Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
