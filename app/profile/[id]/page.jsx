"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const { data: session } = useSession();

  const [userPosts, setUserPosts] = useState([]);
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`/api/users/${params?.id}`);
      const data = await response.json();

      const { photo } = data;

      setUserPhoto(photo);
      console.log("User Photo:", photo); // Log the user photo value after setting the state
    };

    const fetchUserPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) {
      fetchUserData();
      fetchUserPosts();
    }
  }, [params.id]);

  return (
    <Profile
      name={`${userName}'s`}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional Quotes and be inspired by the power of their imagination`}
      data={userPosts}
      photo={userPhoto}
    />
  );
};

export default UserProfile;
