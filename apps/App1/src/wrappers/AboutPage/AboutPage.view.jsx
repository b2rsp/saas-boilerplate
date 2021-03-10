import React from "react";
import "./AboutPage.style.less";
import HandSelectedClassesBanner from "~/components/HandSelectedClassesBanner";
import Share from "~/sections/ShareHomepage";
import { useEffect } from "react";

export function AboutPageView(props) {
  useEffect(() => {
    // Segment
    let dataTrack = {
      name: "About Us",
      path: window.location.pathname || "",
      referrer: document.referrer || "",
      title: document.title || "",
      url: window.location.href
    };
    if (window.rudderanalytics)
      window.rudderanalytics.page(dataTrack.name, dataTrack);
  }, []);

  return (
    <section className="about-us">
      <div className="container-fluid header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <h1 className="title">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container about-cards">
        <div className="row">
          <div className="col-lg-1 card-container"></div>
          <div className="col-lg-10 card-container">
            <div className="about-cards">
              <img src="/static/images/about/WhatIsObby.svg"></img>
              <p>
                <strong>
                  With passionate teachers and inspiring environments, Obby is
                  on a mission to get everyone to rethink learning.{" "}
                </strong>
              </p>
              <p>
                From pottery to salsa, piano to Spanish, discover the best
                classes, courses and workshops The UK has to offer.
              </p>
              <p>
                These aren’t tedious evening classes or throwaway one-off
                ‘experiences.’ Each class is properly hands-on. Not only do you
                learn something, you have a good time while you’re at it.
              </p>
              <p>
                We are rethinking the way people interact with their personal,
                life-long learning journey. We inspire students of all walks of
                life to be curious, bold and explore new things. We work with
                hand-selected teachers to take teaching out of the classroom,
                and into your everyday life.
              </p>
            </div>
          </div>
          <div className="col-lg-1 card-container"></div>
        </div>
      </div>

      <div className="container about-cards">
        <div className="row">
          <div className="col-lg-1 card-container"></div>
          <div className="col-lg-10 card-container">
            <div className="about-cards">
              <img src="/static/images/about/HowItStarted.svg"></img>
              <p>
                <strong>London, December 2015—the idea is born.</strong>
              </p>
              <p>
                After countless frustrations to find the perfect butchery class
                for Tom’s Dad, he called Max to figure out a way to make it
                easier and more enjoyable for people to find and book the
                perfect learning experience in London.
              </p>
              <p>
                <strong>Still in London, August 2016—Obby goes live.</strong>
              </p>
              <p>
                We are building a a learning platform and a genuine community to
                inspire and support others who are on a learning journey.
              </p>
            </div>
          </div>
          <div className="col-lg-1 card-container"></div>
        </div>
      </div>
      <div className="container about-cards">
        <div className="row">
          <div className="col-lg-1 card-container"></div>
          <div className="col-lg-10 card-container">
            <div className="about-cards">
              <img src="/static/images/about/WhyUseObby.svg"></img>
              <p>
                <strong>Do what you love</strong>
              </p>
              <p>
                Teachers on Obby can spend more time focusing on what they love,
                teaching, and less time on admin. Obby helps you with customer
                service, class management, and venue space rental.
              </p>
              <p>
                <strong>More teaching</strong>
              </p>
              <p>
                We help teachers grow their teaching business. Obby helps you
                figure out what to teach and when.
              </p>
              <p>
                <strong>Meet people</strong>
              </p>
              <p>
                Through sharing learning with each other, we share and develop
                meaningful relationships and grow local communities.
              </p>
              <p>
                <strong>Keep moving</strong>
              </p>
              <p>
                We believe learning doesn't end when you leave school, or
                university. It is something you pursue your whole life. We want
                to help as many people as possible embark on their personal
                learning journey.
              </p>
              <p>
                <strong>The Obby student guarantee</strong>
              </p>
              <p>
                We go through a lot to find and vet the best teachers around.
                You can see our full guarantee below.
              </p>
            </div>
          </div>
          <div className="col-lg-1 card-container"></div>
        </div>
      </div>
      <div className="homepage__hand-selected-classes">
        <HandSelectedClassesBanner />
      </div>
      {/* TEACHER SIGN UP */}
      <div className="homepage__share">
        <Share
          onSignUp={() => {
            window.location.href = "https://www.tools.obby.co.uk/";
          }}
        />
      </div>
    </section>
  );
}
