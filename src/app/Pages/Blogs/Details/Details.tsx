import { useParams } from "react-router";
import "./Details.scss";
import Header from "../../../components/Header/Header";
import { useFetchBlogByIdQuery } from "../../../store/blogs-api-slice";

const Details = () => {
  const { id } = useParams();

  const { data = [], isFetching } = useFetchBlogByIdQuery(id);

  let enrichedContent: any;

  if (data[0]?.content.split("<p>").length > 1) {
    enrichedContent = data[0]?.content
      .split("<p>")
      .splice(1, data[0]?.content.length - 1)
      .map((para: string) => {
        if (para.split("<h1>").length > 1) {
          return <h1>{para.split("</p>")[0].split("<h1>")[1]}</h1>;
        } else {
          return <p>{para.split("</p>")[0]}</p>;
        }
      });
  } else {
    enrichedContent = data[0]?.content;
  }

  console.log(enrichedContent);

  console.log(data);

  return (
    <>
      <div className="details-container">
        <Header />

        <div className="article-content">
          <div className="container">
            <div className="cs-blog-detail">
              <div className="cs-main-post">
                <figure>
                  <img
                    data-pagespeed-url-hash="2714250504"
                    alt="jobline-blog (8)"
                    src={data && data[0] && data[0].image}
                  />
                </figure>
              </div>
              <div className="cs-post-title">
                <div className="post-option">
                  <span className="post-date">
                    <a href="http://jobcareer.chimpgroup.com/jobdoor/2015/11/">
                      <i className="cs-color icon-calendar6"></i>Nov 23, 2015
                    </a>
                  </span>
                  <span className="post-comment">
                    <a href="http://jobcareer.chimpgroup.com/jobdoor/experience-writing-for-producing-a-newscast/#comments">
                      <i className="cs-color icon-chat6"></i>4 Comments
                    </a>
                  </span>
                </div>
              </div>
              <div className="cs-post-option-panel">
                <h1 className="article-title">{data[0]?.title}</h1>
                <div className="rich-editor-text">{enrichedContent}</div>
              </div>
              <div className="cs-tags">
                <div className="tags">
                  <span>Tags</span>
                  <ul>
                    <li>
                      <a
                        rel="tag"
                        href="http://jobcareer.chimpgroup.com/jobdoor/tag/college/"
                      >
                        College
                      </a>
                    </li>
                    <li>
                      <a
                        rel="tag"
                        href="http://jobcareer.chimpgroup.com/jobdoor/tag/job/"
                      >
                        Job
                      </a>
                    </li>
                    <li>
                      <a
                        rel="tag"
                        href="http://jobcareer.chimpgroup.com/jobdoor/tag/search/"
                      >
                        Search
                      </a>
                    </li>
                    <li>
                      <a
                        rel="tag"
                        href="http://jobcareer.chimpgroup.com/jobdoor/tag/teacher/"
                      >
                        Teacher
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
