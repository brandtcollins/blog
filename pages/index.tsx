import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Auth from "../components/Auth";
import Account from "../components/Account";
import PostList from "../components/PostList";
import Container from "../components/Container";

export interface IAuth {}

export default function Home() {
  const [session, setSession] = useState<IAuth | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // <Account key={session.user.id} session={session} />

  return <Container>{!session ? <Auth /> : <PostList />}</Container>;
}
