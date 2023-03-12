import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./NavBar.module.css";
import logo from "../../img/costs_logo.png";

function NavBar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul class={styles.list}>
          <li class={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li class={styles.item}>
            <Link to="/projects">Projects</Link>
          </li>
          <li class={styles.item}>
            <Link to="/company">Company</Link>
          </li>
          <li class={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default NavBar;
