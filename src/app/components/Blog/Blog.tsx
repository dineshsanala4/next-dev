import "./Blog.scss";

function Blog() {
  return (
    <div className="section4">
      <div className="row">
        <div className="col-1-of-1" style={{ height: "100%" }}>
          <div className="blog-card">
            <img
              className="blog-card__thumbnails"
              src="https://live.staticflickr.com/65535/52756975910_69de8f798a_c.jpg"
            />
            {/* frontend hydration */}
            <div className="bottom-box">
              <div className="bottom-box__date">
                {new Date().toLocaleDateString()}
              </div>
              <h2 className="bottom-box__title">
                The Current State of Front-End Hydration
              </h2>
              <div className="bottom-box__description">
                With the advent of FrontEnd Frameworks, Hydration has became a
                neccessity..
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img
              className="blog-card__thumbnails"
              src="https://live.staticflickr.com/65535/52756032442_6a3a46eca5_c.jpg"
            />
            {/* optimize apps */}
            <div className="bottom-box">
              <div className="bottom-box__date">
                {new Date().toLocaleDateString()}
              </div>
              <h2 className="bottom-box__title">
                The Current State of Front-End Hydration
              </h2>
              <div className="bottom-box__description">
                With the advent of FrontEnd Frameworks, Hydration has became a
                neccessity..
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img
              className="blog-card__thumbnails"
              src="https://live.staticflickr.com/65535/52756032412_ea3fd4f6c8_c.jpg"
            />
            {/* redux sideeffects */}
            <div className="bottom-box">
              <div className="bottom-box__date">
                {new Date().toLocaleDateString()}
              </div>
              <h2 className="bottom-box__title">
                The Current State of Front-End Hydration
              </h2>
              <div className="bottom-box__description">
                With the advent of FrontEnd Frameworks, Hydration has became a
                neccessity..
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img
              className="blog-card__thumbnails"
              src="https://live.staticflickr.com/65535/52757055928_1ff35552b7_c.jpg"
            />
            responsive apps
            <div className="bottom-box">
              <div className="bottom-box__date">
                {new Date().toLocaleDateString()}
              </div>
              <h2 className="bottom-box__title">
                The Current State of Front-End Hydration
              </h2>
              <div className="bottom-box__description">
                With the advent of FrontEnd Frameworks, Hydration has became a
                neccessity..
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img
              className="blog-card__thumbnails"
              src="https://live.staticflickr.com/65535/52756975910_69de8f798a_c.jpg"
            />
            {/* frontend hydration */}
            <div className="bottom-box">
              <div className="bottom-box__date">
                {new Date().toLocaleDateString()}
              </div>
              <h2 className="bottom-box__title">
                The Current State of Front-End Hydration
              </h2>
              <div className="bottom-box__description">
                With the advent of FrontEnd Frameworks, Hydration has became a
                neccessity..
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img
              className="blog-card__thumbnails"
              src="https://live.staticflickr.com/65535/52757055928_1ff35552b7_c.jpg"
            />
            responsive apps
            <div className="bottom-box">
              <div className="bottom-box__date">
                {new Date().toLocaleDateString()}
              </div>
              <h2 className="bottom-box__title">
                The Current State of Front-End Hydration
              </h2>
              <div className="bottom-box__description">
                With the advent of FrontEnd Frameworks, Hydration has became a
                neccessity..
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
