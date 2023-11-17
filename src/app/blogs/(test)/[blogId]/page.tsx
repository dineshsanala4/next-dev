import { FC } from "react";

interface pageProps {
  params: {
    blogId: string
  }
}

const Blog:FC<pageProps> = ({params}) => {
    return (
      <>
        <h1>Blog ID: {params.blogId}</h1>
      </>
    );
  };
  
  export default Blog;
  