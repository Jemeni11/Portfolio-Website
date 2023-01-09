import { useParams } from "react-router-dom"
import "./project.css"

const Project = () => {
  let params = useParams()
  let projectID = params.projectID

  return (
    <div>
      <p>{"This is project: " + projectID}</p>
    </div>
  )
}

export default Project