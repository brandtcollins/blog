import { FunctionComponent } from "react";
import { iPost } from "../ts/Interfaces";

interface PostProps {
  data: iPost;
}

const Post: FunctionComponent<PostProps> = ({ data }) => {
  return (
    <div key={data.id}>
      <h2 className="text-lg font-bold">{data.title}</h2>
      <p className="">{data.content}</p>
    </div>
  );
};

export default Post;
