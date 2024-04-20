'use client'
// import "./Blogs.scss";
// import Header from "../../components/Header/Header";
// import { useFetchBlogsQuery } from "../../store/blogs-api-slice";
// // import { Blog } from "../../shared/interfaces/blogs.interface";
// import { useNavigate } from "react-router";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// const Blogs = () => {
//   const navigate = useNavigate();
//   // document.getElementsByTagName("html")[0].style.overflow = "scroll";

//   const { data = [], isFetching } = useFetchBlogsQuery();

//   console.log(data);

//   const goToBlogPage = (id: string) => {
//     navigate(`/blogs/${id}`);
//   };

//   return (
//     <>
//       {/* <Header />
//       <div className="blogs-main">
//         <div className="band" style={{ display: "block" }}>
//           <div className="search-container" style={{ width: "100%" }}>
//             <div className="Card">
//               <div className="CardInner">
//                 <label>Search for your favourite technologies</label>
//                 <div className="container">
//                   <div className="Icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#657789"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-search"
//                     >
//                       <circle cx="11" cy="11" r="8" />
//                       <line x1="21" y1="21" x2="16.65" y2="16.65" />
//                     </svg>
//                   </div>
//                   <div className="InputContainer">
//                     <input placeholder="It just can't be JavaScript..." />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="band">
//           {data?.data &&
//             data.data.map((article: any) => {
//               const thumbnailStyle = {
//                 backgroundImage: `url('${article.image}')`,
//               };
//               return (
//                 <div className={"item-" + article.id} key={article.id}>
//                   <a onClick={() => goToBlogPage(article.id)} className="card2">
//                     <div className="thumb" style={thumbnailStyle}></div>
//                     <article>
//                       <h1>{article.title}</h1>
//                       <span>{article.description}</span>
//                     </article>
//                   </a>
//                 </div>
//               );
//             })}
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Blogs;
const Blogs = () => {
    return <h1>Blogs</h1>
}
export default Blogs;