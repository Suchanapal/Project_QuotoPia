import PromptCard from "./PromptCard";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Profile = ({ name, desc, data, handleEdit, handleDelete, post }) => {
  const { data: session } = useSession();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }; 
  const [userImg,setUserImg]=useState("");
  useEffect(()=>{
    if(data.length){
      setUserImg(data[0]?.creator?.image)
    }
  },[data])
  console.log(data);
  return (
    <>
      <section className="w-full mainn main-raised">
        <div className="imgcont profile">
          <div className="imagee image flex">
          <div class="circle-1"></div>
				<div class="circle-2"></div>
            <Image
              src={userImg}
              alt="user_image"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>
        </div> 

        <div className="content">
          <h1>{capitalizeFirstLetter(name)} Profile</h1>
          <p className="desc text-center">{desc}</p>
        </div>

        <div className="mt-10 prompt_layout mr">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;