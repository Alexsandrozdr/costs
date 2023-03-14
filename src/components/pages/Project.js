import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";
function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5001/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [id]);

  return <>{project.name ? <p>{project.name}</p> : <Loading />}</>;
}
export default Project;
