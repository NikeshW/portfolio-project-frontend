import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="about-page">
        <h2>
          Buy nothing app is a platform for the wildly popular Buy Nothing
          groups that started on Facebook. Buy Nothing communities are already a
          global reuse economy with immense social and environmental impact. On
          this app, neighbors give away what they have to give — home decor
          goods, gift wrap, symphony tickets — whoever wants or needs it.
        </h2>
      </div>
      <div className="about-back-button">
        <Link to={"/"}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
