import React from "react";

import Accordion from "./accordion";

function Demo(props) {
  return (
    <section>
      <Accordion heading="What technologies do I use to build the website?">
        <dl>
          <dt>Programming Languages</dt>
          <dd>JavaScript, HTML, CSS</dd>
          <dt>JavaScript Frameworks</dt>
          <dd>EmberJS, ReactJS, AngularJS</dd>
          <dt>Web Accessibility</dt>
          <dd>WCAG 2.0, WAI ARIA</dd>
          <dt>Content Management System</dt>
          <dd>WordPress</dd>
        </dl>
        <p>
          In addition to the above, I always try t stay abreast of new
          technologies.
        </p>
      </Accordion>
      <Accordion heading="Do I work with mobile devices?">
        <p>
          The website will of course be mobile friendly automatically. Which
          means, the same website can be viewed on tablet and phone and you can
          notice the layout adjust seamlessly. However, if you are thinking of
          mobile application (Apps) that is not the case.
        </p>
      </Accordion>
      <Accordion heading="How would the communication process work?">
        <p>
          I will be continuosly communicating with the owner of the website all
          along the process. It is through email/ phone and video conference/
          screen sharing.
        </p>
      </Accordion>
      <Accordion heading="What is the duration and pricing for getting the website up?">
        <p>
          It all depends on the project. I am open to have complementary
          consulation for free to sketch out the project. I have worked on
          various kinds and sizes of websites so far including small business,
          educational, financial and retail websites. I have also worked on
          websites that were driven entirely by data, driven by behaviour of the
          user and so on.
        </p>
      </Accordion>
      <Accordion heading="What kind of websites have I worked on in the past?">
        <p>Please visit the above question to know that.</p>
      </Accordion>
    </section>
  );
}

export default Demo;
