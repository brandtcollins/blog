import React, { FunctionComponent, useEffect, useState } from "react";
import { iPost } from "../ts/Interfaces";
import { supabase } from "../utils/supabaseClient";
import Post from "../components/Post";

interface PostListProps {}

const PostList: FunctionComponent<PostListProps> = () => {
  const [posts, setPosts] = useState<Post[] | null>();
  async function getPosts() {
    let { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .range(0, 9);
    setPosts(posts);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {posts?.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostList;
