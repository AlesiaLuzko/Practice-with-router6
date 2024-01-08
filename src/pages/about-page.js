import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>About us</h1>
      <p style={{textAlign: "center"}}>
        This is a demo website about React-router-dom library
      </p>
      <ul>
        <li><Link to="contacts">Our contacts</Link></li>
        <li><Link to="team">Our team</Link></li>
      </ul>

      <Outlet />

      {/*<Routes>*/}
      {/*  <Route path="contacts" element={<p>Our contacts</p>} />*/}
      {/*  <Route path="team" element={<p>Our team</p>} />*/}
      {/*</Routes>*/}
    </div>
  );
};

export default About;