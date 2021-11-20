import { FunctionComponent, useEffect, useState } from "react";
import Head from "next/head";
import { iPost } from "../ts/Interfaces";
import { supabase } from "../utils/supabaseClient";
import Auth from "../components/Auth";
import "draft-js/dist/Draft.css";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface WritePostProps {}
export interface iAuth {}

let initData: iPost = {
  title: "",
  content: "",
  category: -1,
  created_at: "",
};

const WritePost: FunctionComponent<WritePostProps> = () => {
  const [session, setSession] = useState<iAuth | null>(null);
  const [postData, setPostData] = useState<iPost>(initData);
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleStringChange = (e: any) => {
    let field = e.target.name;
    let value = e.target.value;
    setPostData({ ...postData, [field]: value });
  };

  const handleNumberChange = (e: any) => {
    let field = e.target.name;
    let value = e.target.value;
    setPostData({ ...postData, [field]: +value });
  };

  async function handleSubmit(e: any) {
    const date = new Date();
    setPostData({ ...postData, created_at: date.toISOString() });

    e.preventDefault();
    const { data, error } = await supabase.from("posts").insert([postData]);
    console.log(`fired`);
  }

  useEffect(() => {
    console.log(postData);
  }, [postData]);
  // return (
  //   <div>
  //     {!session ? (
  //       <Auth />
  //     ) : (
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label htmlFor="category">Category</label>
  //           <select name="category" onChange={handleNumberChange}>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //             <option value="3">3</option>
  //           </select>
  //           <div>
  //             <label htmlFor="title">Title</label>
  //             <input
  //               type="title"
  //               name="title"
  //               placeholder="Post title"
  //               value={postData?.title}
  //               onChange={handleStringChange}
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="content">Content</label>

  //             <textarea
  //               name="content"
  //               placeholder="Post Content"
  //               value={postData?.content}
  //               onChange={handleStringChange}
  //             />
  //           </div>
  //         </div>
  //         <button>Post</button>
  //       </form>
  //     )}
  //   </div>
  // );
  return <QuillNoSSRWrapper theme="snow" />;
};

export default WritePost;
