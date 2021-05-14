import  Github from "../../img/Github.png";
import  Link from "../../img/Link.png";

export const Footer = () => {
  return (
    <>
      <footer>
        News App
      <div>2021 copyright all rights reserved</div>
      <div className="footer-link">
      <a href="https://github.com/gilbarbara/logos/blob/master/logos/github.svg?short_path=08c49b1"><img width={"32px"} height={"32px"} src={Github} alt="Preview" /></a>
      <a href="https://www.linkedin.com/in/alexey-treglazov-340b57207/"><img width={"40px"} height={"32px"} src={Link} alt="Preview" /></a>
      </div>
      </footer>
    </>
  );
}