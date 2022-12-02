import emily from "./images/image-emily.jpg";
import jennie from "./images/image-jennie.jpg";
import thomas from "./images/image-thomas.jpg";
const Clients = () => {
  return (
    <section className="clients">
      <h2>Client Testimonials</h2>
      <ul>
        <li className="client">
          <div className="client-img">
            <img src={emily} alt="Emily R. Profile" />
          </div>
          <p className="review">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="introduction">
            <span className="name">Emily R.</span>
            <span className="role">Marketing Director</span>
          </div>
        </li>
        <li className="client">
          <div className="client-img">
            <img src={thomas} alt="Thomas S. Profile" />
          </div>
          <p className="review">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className="introduction">
            <span className="name">Thomas S.</span>
            <span className="role">Chief Operating Officer</span>
          </div>
        </li>
        <li className="client">
          <div className="client-img">
            <img src={jennie} alt="Jennie F. Profile" />
          </div>
          <p className="review">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="introduction">
            <span className="name">Jennie F.</span>
            <span className="role">Business Owner</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Clients;
