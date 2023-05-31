import './home.css'

import students from '../../images/students.png'
import handsOnLearning from '../../images/handsOnLearning.png'
import creatity from '../../images/creativity.png'
const Home = () => {
    return (
        <>
          <section className = "home-top" >
            <section>
              <div className="sub">
                <h2 style = {{display: "flex", fontSize: "2.25rem", marginBottom: "1rem"}}> 
                  Learn How To
                </h2>
                <h1 className = "three-words">
                  <span>Code</span><span>Create</span><span>Collaborate</span>
                </h1>
                <h4>
                  Unleash your coding potential with CodePark's project-based learning program 
                </h4>
              </div>
            </section>
          </section>

          <section style = {{flexDirection: "column"}}>
            <div className = "hbox">
              <h2 style = {{fontSize: "2.25rem"}}> 
                We Believe In
              </h2>
            </div>
            <div className = "hbox">
              <div style = {{display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                <img src = {students} alt = "image for built by studens for students" />
                <h3>being built by students, for students</h3>
                <p>We empathize with students and strive to make learning both fun and challenging.</p>
              </div>

              <div style = {{display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                {window.innerWidth < 768 && <img src = {handsOnLearning} alt = "image for hands on learning" />}
                <h3>hands on learning</h3>
                <p>At CodePark, we don't just teach to code, but to problem solve, work as a team, & create application via our project based learning methods</p>
                {window.innerWidth >= 768 && <img src = {handsOnLearning} alt = "image for hands on learning" />}
              </div>

              <div style = {{display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                <img src = {creatity} alt = "image for creativity" />
                <h3>creativity</h3>
                <p>CodePark students are not just passive learners, but active creators. They will have the opportunity to design, implement, and ideate their very own application during our program. </p>
              </div>
            </div>

          </section>
          
          <section style = {{marginTop: "7rem", flexDirection: "column"}}>

            <div className = "hbox">
              <h2 style = {{fontSize: "2.25rem", marginBottom: "2rem"}}> 
                CodePark FAQ
              </h2>
            </div>

            <div className = "hbox">
              <div>
                <h3>What is a coding camp?</h3>
                <p>During a coding camp, participants are introduced to various programming languages, tools, and concepts. They learn the fundamentals of coding and gain hands-on experience through practical exercises, projects, and challenges. Coding camps may cover a wide range of topics, including web development, app development, game design, robotics, artificial intelligence, data science, and more.</p>
              </div>
              <div>
                <h3>What makes CodePark different?</h3>
                <p>Our workshops at CodePark are unique because they are taught around creating products and projects. CodePark is also a cheaper alternative compared to other camps and run locally by driven university students who are trained to be mentors.</p>
              </div>
              <div>
                <h3>How does a coding camp help kids?</h3>
                <p>Coding camps foster a collaborative learning environment, empowering campers to acquire essential teamwork skills while immersing themselves in the fundamentals of a highly valuable STEM subject. Through enjoyable and engaging activities, students not only gain knowledge but also develop a deep appreciation for the world of coding.</p>
              </div>
            </div>
            

          </section>
        </>
    )
}

export default Home;