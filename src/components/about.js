import React from "react";

function About() {
  return (
    <div>
      <p className="content is-large">Full Stack/Junior Developer</p>
      <hr />
      <img
        className="pic"
        src={process.env.PUBLIC_URL + "/images/profile.jpg"}
        alt="Louis Kim Photo"
      />
      <p className="content is-italic mt-5">
        Hello my name is Louis and I'm currently enrolled in Web Developer
        Coding bootcamp through University of Washington, to be certified in May
        2023. I'm an ambitious candidate who has passion for problem solving and
        optimizing business processes from a customer’s perspective and needs.
      </p>
      <p className="content">
        Currently, I work at a small real estate tech company as a CSR II and
        I'm on the course of becoming an Application Support Engineer. SQL is
        the main thing that I'm working with in pgAdmin but I'm also been
        looking into coding. I found this course and decided to take it in order
        to help with my career growth/change. I'm excited to continue working
        and learning more about coding in general. I'm glad I had a small
        general background in college which has already been beneficial to me in
        the Prework and first class.
        <br></br>
        By the end of the year when I'm promoted to an Application Support
        Engineer I hope to be able to hone more skills in SQL and get more
        familiar with tools like pgAdmin and Kibana. I do wish to be able to
        learn a lot from this coding bootcamp so that I can further my career
        path by becoming a junior software engineer at my current company if the
        chance arises. This challenge was a very fun one to do with all the
        skills I have so far learned throughout the weeks and I can't wait to
        continue to learn more.
      </p>
    </div>
  );
}

export default About;
