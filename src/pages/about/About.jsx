import './about.css'
import instructors from '../../data/instructors.js'
import InstructorCard from '../../components/instructorCard/InstructorCard'

document.title = "CodePark | About"
const About = () => {
  return(
    <>
      <section className = "about-section">
        <div className = "container">
          <h1>About CodePark</h1>

          <div className = "about-sec">
            <h2>Our Mission</h2>
            <h3>At CodePark, our mission is to inspire and empower the next generation of coders by providing engaging and educational coding classes. We believe that coding is not only a valuable skill but also a means of fostering creativity, problem-solving abilities, and critical thinking.</h3>
          </div>

          <div className = "about-sec">
            <h2>Our Workshops</h2>
            <h3>CodePark offers a diverse range of coding classes and camps designed to cater to various interests and skill levels. Whether you are a beginner or have some coding experience, we have something for everyone. Our experienced and passionate university student instructors are dedicated to creating a supportive and collaborative learning environment.</h3>
            <h3>With hands-on projects, interactive lessons, and teamwork activities, our camps provide a fun and immersive learning experience. We strive to ignite a passion for coding in our campers and equip them with the skills necessary to thrive in the digital age.</h3>
          </div>

          <div className = "about-sec">
            <h2>Our Instructors</h2>
            <h3>Our instructors are university students who are passionate about coding and teaching. They are dedicated to creating a supportive and collaborative learning environment. With their expertise and enthusiasm, our instructors are committed to providing a fun and immersive learning experience.</h3>

            <div className = "instruc-cards">
              {
                instructors.map((instructor, index) => {
                    return(
                      <InstructorCard key = {index} {...instructor} />
                    )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;