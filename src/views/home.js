import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>New Application | Executive Partner Prompt.ph</title>
        <meta
          property="og:title"
          content="New Application | Executive Partner Prompt.ph"
        />
      </Helmet>
      <div className="home-navbar">
        <img
          alt="image"
          src="/playground_assets/frame%201-200h.png"
          loading="eager"
          className="home-image"
        />
      </div>
      <div className="home-body">
        <div className="home-content-1">
          <div className="home-left-column">
            <span className="home-text"> Limited Slots Only</span>
            <h1 className="home-text01">Executive Partner (Philippines)</h1>
            <span className="home-text02">
              <span className="home-text03">
                We&apos;re looking for people who are curious and
                detail-oriented. You&apos;ll handle administrative work for US
                companies, where you&apos;ll be able to learn about their modern
                business approaches and strategies. No prior skills are required
                except a mastery of English.
              </span>
              <br className="home-text04"></br>
              <br className="home-text05"></br>
              <span className="home-text06">
                You&apos;ll be able to work from home, or anywhere in the world,
                but hours will be according to US timezones.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-right-column">
            <a
              href="https://heyform.net/f/qGJX03lW"
              target="_blank"
              rel="noreferrer noopener"
              className="home-c-t-a button"
            >
              <span className="home-text08">Apply now</span>
            </a>
            <ul className="home-ul list">
              <li className="home-li list-item">
                <span>
                  <span className="home-text10">Employment Type</span>
                  <br></br>
                  <span className="home-text12">Freelance</span>
                  <br></br>
                </span>
              </li>
              <li className="home-li1 list-item">
                <span>
                  <span className="home-text15">Compensation</span>
                  <br className="home-text16"></br>
                  <span className="home-text17">Starts at ₱</span>
                  <span className="home-text18">30k / month</span>
                  <br></br>
                </span>
              </li>
              <li className="list-item home-li2">
                <span>
                  <span className="home-text21">Workplace</span>
                  <br></br>
                  <span className="home-text23">Fully remote</span>
                  <br></br>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-content-2">
          <span className="home-text25">Key Responsibilities</span>
          <span className="home-text26">
            <span className="home-text27">   </span>
            <span>•   </span>
            <span className="home-text29">Data gathering and reports</span>
            <br className="home-text30"></br>
            <span>   •   </span>
            <span className="home-text32">Email management</span>
            <br className="home-text33"></br>
            <span>   •   </span>
            <span className="home-text35">Schedule meetings</span>
            <br className="home-text36"></br>
            <span>   •   </span>
            <span className="home-text38">Prepare documents for meetings</span>
            <br className="home-text39"></br>
            <span>   •   </span>
            <span className="home-text41">
              Call clients to request, or follow up on documents
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-content-3">
          <span className="home-text43">Minimum Qualifications</span>
          <span className="home-text44">
            <span>   •   Mastery of English, both verbal and written</span>
            <br></br>
            <span>   •   </span>
            <span>
              Ability to speak professionally over Zoom and Phone Calls
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>   •   </span>
            <span>
              Computer for web browsing, spreadsheets, and communications
            </span>
            <br></br>
            <span>   •   </span>
            <span>Stable internet connection, preferably at least 5Mbps</span>
            <br></br>
            <span>   •   </span>
            <span>Headset for video calls, or a quiet WFH environment</span>
          </span>
        </div>
        <div className="home-content-4">
          <span className="home-text59">Why work with Prompt.ph!</span>
          <span className="home-text60">
            <span>   •   </span>
            <span>
              Earn as much as ₱30,000 per month, plus raises and bonuses!
            </span>
            <br></br>
            <span>   •   </span>
            <span>Fully remote work</span>
            <br></br>
            <span>   •   </span>
            <span>
              Opportunities to work and learn at quickly growing US businesses
            </span>
            <br></br>
          </span>
          <span className="home-text70"> About Us</span>
          <span className="home-text71">
            <span>
              Prompt.ph empowers businesses globally with Filipino talent. We
              train and equip our talent with best-in-class AI tools and
              software.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-sticky-c-t-a-section">
        <div className="home-container1">
          <span className="home-text74">Change your future today!</span>
          <a
            href="https://heyform.net/f/qGJX03lW"
            target="_blank"
            rel="noreferrer noopener"
            className="home-c-t-a1 button"
          >
            <span className="home-text75">Apply now</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
