import './whatWeDo.css'

const WhatWeDo = () => {
  return (
    <section className='what-we-do'>
      <h1>What We Do</h1>
      <div>
        <h2>How CodePark Classes Work</h2>
        <h3>
          CodePark offers coding classes designed to provide an immersive and engaging learning experience for students. Our classes are conducted at the Mountain View Community Center, and each session lasts for two weeks, from Monday to Friday. At the end of each session, students will have the opportunity to showcase their projects to their peers and parents.
        </h3>
        <h2>
          Class Structure
        </h2>
        <h3>
          During each session, students attend classes for 4-5 hours every day (online students will be scheduled in the afternoon for 3 hours). The classes are structured to incorporate project-based learning, where students actively work on coding projects to apply what they have learned.
        </h3>
        <h2>
          Class Schedule
        </h2>
        <h3>
          The class schedule is designed to optimize learning and project work. From Monday to Wednesday, students engage in interactive lessons and activities that help them acquire new skills and knowledge. Thursdays and Fridays are dedicated entirely to project work, allowing students to collaborate with their peers and work on exciting coding projects. At the end of each session, students will have the opportunity to showcase their projects to their peers and parents.
        </h3>
        <h2>
          Enrollment Options
        </h2>
        <h3>
          CodePark offers two enrollment options:
        </h3>
        <h3 style = {{borderBottom: "2px solid var(--secondary-color)"}}>Group Learning</h3>
        <h3>
          In group learning, students join a small group of their peers. This format encourages collaboration, teamwork, and peer-to-peer learning.
        </h3>
        <h3 style = {{borderBottom: "2px solid var(--secondary-color)"}}>One-on-One Learning</h3>
        <h3>
          For students who prefer personalized attention, we offer one-on-one <b>online</b> learning sessions. In this format, a dedicated instructor provides individualized instruction tailored to the student's specific needs and learning pace.
        </h3>
        <h3>
          No matter which option you choose, our experienced instructors are committed to guiding and supporting you throughout your coding journey. We provide a nurturing and inclusive learning environment where students can develop their coding skills, explore their creativity, and gain confidence in their abilities.
        </h3>
        <h2>
          Pricing
        </h2>
        <h3>
          The enrollment fee for each session is $1000 for group learning and $1500 for one-on-one learning all included. This is a one-time fee that covers the entire session.
        </h3>
        <h2>What You Need</h2>
        <h3>
          <ul>
            <li>A laptop or desktop computer (Any modern specs will do)</li>
            <li>Webcam and microphone (if you are enrolling in one-on-one learning). Any specs will do, as long as the computer is able to run a web browser</li>
            <li>Charger and cables</li>
            <li>A lunch, and a snack</li>
            <li>An open mind and a willingness to learn!</li>
          </ul>
        </h3>
        <h2>
          Refund Policy
        </h2>
        <h3>
          We offer a full refund if you cancel your enrollment at least 3 days before the start of the session. No refunds will be issued after that point.
        </h3>
      </div>
    </section>
  );
};

export default WhatWeDo;