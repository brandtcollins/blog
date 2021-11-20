import { FunctionComponent } from "react";
import { iPost } from "../ts/Interfaces";

interface PostProps {
  data: iPost;
}

const Post: FunctionComponent<PostProps> = ({ data }) => {
  //prettier-ignore
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date(data.created_at);
  const datePosted = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <div key={data.id}>
      <h2>{data.title}</h2>
      <p>{datePosted}</p>
    </div>
  );
};

export default Post;
