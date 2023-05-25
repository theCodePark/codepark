import "./workshop.css";
import * as workshopJson from "../../data/workshops.json";
import WorkshopCard from "../../components/workshopCard/WorkshopCard";

document.title = "CodePark | Workshops"
const Workshop = () => {

  return(
    <>
      <section className="workshopPage-top">
        <h1>CodePark Workshops</h1>
        <h3>CodePark's workshops provide an immersive and hands-on experience centered around project-based development. We believe that the best way to learn programming and computer science is through practical application and building real-world projects. In these workshops, participants actively engage in collaborative problem-solving, allowing them to develop essential skills while working on meaningful projects.</h3>
        <h3>Through our project-based approach, participants gain a deeper understanding of programming concepts and how to apply them in a practical setting. These workshops foster creativity, critical thinking, and teamwork as participants work together to brainstorm ideas, design solutions, and bring their projects to life.</h3>
        <br />
      </section>
      <section className = "workshopPage-bottom">
          {
            workshopJson.workshops.map((workshop, index) => {
                return(
                  <WorkshopCard key = {index} workshop = {workshop} />
                )
            })
          }
      </section>
    </>
  )
}

export default Workshop;