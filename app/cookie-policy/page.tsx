import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-3 mx-6 sm:mx-14 md:mx-24 lg:mx-32 flex flex-col gap-8">
          <div>
            <h1 className="font-bole"> Cookie Policy</h1>
            <p>
              In all possibilities, your website will be configured towards
              accepting cookies, and so we might collect the non-personally
              identifiable information by using cookies or the tags.
            </p>
          </div>
          <div>
            <h1 className="font-bole"> About the Cookie Policy</h1>
            <p>
              This very Cookie Policy will be explaining what are the cookies
              and how are they used here, the cookie types we are using, that is
              the information we are collecting by using the cookies, how that
              information is used, and how the cookie preferences can be
              controlled.
            </p>
            <p>
              In our Privacy Policy, we have clearly mentioned how we are using,
              storing and keeping personal information secure. At any time, you
              might change or withdraw your consent from the Cookie Declaration
            </p>
          </div>
          <div>
            <h1 className="font-bole">What Are Cookies?</h1>
            <p>
              Cookies are the small text files used for storing every bit of
              information. Cookies are stored on the device when the website is
              browsed on your browser. These cookies help in proper website
              functioning, securing it, providing better user experience and
              understanding how the website performing. Cookies are even used
              for analyzing what works and the areas in need of improvement.
            </p>
          </div>
          <div>
            <h1>What is A Tag?</h1>
            <p>
              Tags are the page tags, gif tags, web beacons, helping the website
              to track website or email activities, such as for how many times
              has a specific email or a page been interacted with. Ads and
              emails sent by our website will contain these tag types.
            </p>
          </div>
          <div>
            <h1 className="font-bole">
              Should You Accept These Cookies Being Talked Of?
            </h1>

            <p className="py-2">
              You need not have to accept the cookies for using the Brainiac
              website. Rejecting the cookies will indicate certain features and
              resources might not be working properly, and in return, you will
              encounter an unpleasant experience.
            </p>
            <p className="py-2">
              Initially, most browsers are set to accept cookies, but you will
              be able to change your browser settings for accepting or rejecting
              the cookies. All the cookies on our website as well as on the web
              will belong to one of the four categories
            </p>
            <ul className="py-2 flex flex-col gap-2">
              <li>Strictly Necessary</li>
              <li> Performance Functionality</li>
              <li> Advertising/Targeting</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bole">
              What Are the Types of Cookies We Are Using?
            </h1>
            <p className="py-2">
              <strong>Essential</strong> – To experience the website full
              functionality, some cookies are indeed essential. The essential
              cookies allow in maintaining the user sessions while preventing
              security threats. Neither do they collect nor do they store
              personal information.
            </p>
            <p className="py-2">
              <strong> Statistics </strong>- The Statistics cookies store
              information which includes the number of visitors visiting the
              website, the count of unique visitors, the website pages that have
              already been visited, the source directing the visit and more.
              Through these data, we can understand and analyze how well the
              website is performing and which areas should be improved.
            </p>
            <p className="py-2">
              <strong> Functional</strong>– The Functional cookies help in
              certain non-essential functionalities on the website. These
              functionalities comprise embedding contents like videos, sharing
              the website content on social media platforms.
            </p>
            <p className="py-2">
              <strong> Preferences</strong> – The Preference cookies are useful
              in storing your settings and browsing the preferences like
              language preferences for you to enjoy an efficient and improvised
              experience on visiting the website in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
