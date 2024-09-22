import React from "react";
import classNames from "./info.module.scss";

const Info = () => {
  return (
    <section className={classNames.info}>
      <div className={classNames.details}>
        <div className={classNames.title}>
          <span className="whiteDot"></span>
          ABOUT ME
        </div>
        <div className={classNames.shortDesc}>
          I'm passionate about building high-quality, scalable products that
          deliver <i>exceptional performance and user experience.</i>
        </div>
        <div className={classNames.storyTime}>
          <div>
            <div className={classNames.imageDiv}></div>
            <div className={classNames.detailsDiv}>
              <div className={classNames.title}>Ever since the begining.</div>
              <div className={classNames.desc}>
                I was first introduced to computer when i was around 5th
                standard it was love at first site at the time itself i know i
                wanted to something with it. As i grew up i got to know more &
                more about it & before i knew it i wanted to become a software
                engineer.
              </div>
            </div>
            <div className={classNames.imageDiv}></div>
            <div className={classNames.detailsDiv}>
              <div className={classNames.title}>
                What we seek in life will find its way to us.
              </div>
              <div className={classNames.desc}>
                After completing the bootcamp, I received two job offers: one
                from a traditional service-based company and the other from a
                Web3 startup. Driven by my curiosity about cryptos and Web3,
                which I’d developed during my trading days in college, I chose
                the Web3 startup based in Hyderabad, joining as a frontend
                engineer.
              </div>
            </div>
          </div>
          <div>
            <div className={classNames.detailsDiv}>
              <div className={classNames.title}>
                Hi, This is my story — as a boy born and raised in the rural
                town of Paramakudi, Tamil Nadu, India, i was facisanated about
                technology & computers from the time i know — it was love at
                first sight.
              </div>
            </div>
            <div className={classNames.imageDiv}></div>
            <div className={classNames.detailsDiv}>
              <div className={classNames.title}>
                Things don't always go according to plan.
              </div>
              <div className={classNames.desc}>
                <div>
                  After high school, I aimed to pursue a B.Tech in Information
                  Technology, but life took me down a different path. I ended up
                  studying Business Administration (BBA), where I was introduced
                  to the world of stock markets, forex, trading, and
                  cryptocurrencies. Despite enjoying these subjects, I knew my
                  heart was still set on becoming a software engineer.
                </div>
                <div>
                  After completing my degree, I found myself in a dilemma,
                  trying to navigate my way into the tech industry without a
                  traditional IT background. I juggled different jobs until I
                  discovered a full-stack web development bootcamp. I seized the
                  opportunity and immersed myself in the program for eight
                  months.
                </div>
              </div>
            </div>
            <div className={classNames.imageDiv}></div>
            <div className={classNames.detailsDiv}>
              <div className={classNames.title}>Bringing it all to life.</div>
              <div className={classNames.desc}>
                It’s been over two years, and what a journey it’s been! Yet, the
                urge to achieve something greater—the dream of the child within
                me—still drives me. My passion for Web3 burns brighter than
                ever, compelling me to fully immerse myself in this exciting
                space as I look forward to the future and all it holds.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.experience}>
        <div className={classNames.title}>
          <span className="whiteDot"></span>
          EXPERIENCE
        </div>
        <div className={classNames.allExperiences}>
          <div className={classNames.eachItem}>
            <div>Nvest Campus</div>
            <div className={classNames.jobDetails}>
              <div className={classNames.role}>Frontend Engineer</div>
              <div className={classNames.duration}>08/'22 - Present</div>
              <div className={classNames.works}>
                I’ve worked on a variety of projects in different areas,
                including web3 bond market, blogging site, insurance admin
                portals, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.education}>
        <div className={classNames.title}>
          <span className="whiteDot"></span>
          EDUCATION
        </div>
        <div className={classNames.allEducations}>
          <div className={classNames.eachItem}>
            <div>
              <div>The American College,</div>
              <div>Madurai.</div>
            </div>
            <div className={classNames.educationDetails}>
              <div className={classNames.role}>
                Bachelor of Business Administration (BBA)
              </div>
              <div className={classNames.duration}>08/'17 - 07/'20</div>
            </div>
          </div>
          <div className={classNames.eachItem}>
            <div>
              <div>Masai School,</div>
              <div>Bangalore.</div>
            </div>
            <div className={classNames.educationDetails}>
              <div className={classNames.role}>Full-Stack Web Development</div>
              <div className={classNames.duration}>08/'21 - 07/'22</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
