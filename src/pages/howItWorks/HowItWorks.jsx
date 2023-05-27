import './howItWorks.css'

const HowItWorks = () => {
  return (
    <section className='how-it-works'>
      <h1>How CodePark Classes Work</h1>
      <div>
        <h3>
          CodePark offers coding classes designed to provide an immersive and engaging learning experience for students. Our classes are conducted at the Mountain View Community Center, and each session lasts for three weeks, from Monday to Friday. At the end of each session, students will have the opportunity to showcase their projects to their peers and parents.
        </h3>
        <h2>
          Class Structure
        </h2>
        <h3>
          During each session, students attend classes for 2 hours every day. The classes are structured to incorporate project-based learning, where students actively work on coding projects to apply what they have learned.
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
          In group learning, students join a small group of their peers. This format encourages collaboration, teamwork, and peer-to-peer learning. The enrollment fee for group learning is $1000 per session.
        </h3>
        <h3 style = {{borderBottom: "2px solid var(--secondary-color)"}}>One-on-One Learning</h3>
        <h3>
          For students who prefer personalized attention, we offer one-on-one learning sessions. In this format, a dedicated instructor provides individualized instruction tailored to the student's specific needs and learning pace. The enrollment fee for one-on-one learning is $1250 per session.
        </h3>
        <h3>
          No matter which option you choose, our experienced instructors are committed to guiding and supporting you throughout your coding journey. We provide a nurturing and inclusive learning environment where students can develop their coding skills, explore their creativity, and gain confidence in their abilities.
        </h3>
        <h2>
          Pricing
        </h2>
        <h3>
          The enrollment fee for each session is $800 for group learning and $1000 for one-on-one learning all included. This is a one-time fee that covers the entire session.
        </h3>
      </div>
    </section>
  );
};

export default HowItWorks;