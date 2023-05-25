import './workshopCard.css'

const WorkshopCard = ({ workshop }) => {
  
  const levelMap = {
    "0": "Introductory",
    "1": "Intermediate",
    "2": "Advanced",
  }

  return(
    <>
      <div className="card">
        <div className="card-body">
          <div className="side">
            <h2 className="card-title">{workshop.title}</h2>
            <div style = {{marginLeft: "1rem", marginRight: "1rem"}}>
              <p className="card-text">{workshop.desc}</p>
             
            </div>
          </div>
          <div className="side2">
            <div className="flag">
              {levelMap[workshop.level]}
            </div>
            <div style = {{margin: "5rem 0 0 0"}}>
              <h3 style = {{margin: "0", color: "var(--secondary-color)"}}>
                Who is it for?
              </h3>
              <p className="card-text">
                {workshop.for}
              </p>

              <a style = {{fontSize: "1.1rem"}} href = {workshop.syllabus} target = "_blank" rel = "noreferrer">Learn More</a>
              
            </div>
          </div>
        </div>
       
      </div>

    </>
  )
}

export default WorkshopCard; 