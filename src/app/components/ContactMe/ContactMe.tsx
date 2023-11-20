import "./ContactMe.scss";

function ContactMe() {
  return (
    <div className="section4">
      <div className="row" style={{ height: "100%" }}>
        <div className="col-1-of-1" style={{ height: "100%", width: "100%" }}>
          <div className="contact-card">
            <form>
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder="Name"
                style={{ marginTop: "10rem" }}
              />
              <input
                name="email"
                type="text"
                className="feedback-input"
                placeholder="Email"
              />
              <textarea
                name="text"
                className="feedback-input"
                placeholder="Comment"
              ></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
