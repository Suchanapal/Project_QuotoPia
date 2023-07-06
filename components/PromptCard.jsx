"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleCopy = async () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleProfileClick = () => {
    

    if (post.creator?._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator?._id}?name=${post.creator?.username}`);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-center mb-2">
        <div
          className="flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          {post.creator?.image ? (
            <Image
              src={post.creator.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          ) : (
            <div className="rounded-full bg-gray-200 w-10 h-10"></div>
          )}
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator?.username || "Unknown User"}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator?.email || "Unknown Email"}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="copy_btn" onClick={handleCopy}>
            <Image
              src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
              width={16}
              height={16}
              alt="copy btn"
            />
          </div>
          <div className="heart_btn mt-1" onClick={handleLike}>
            <Image
              src={
                isLiked
                  ? "/assets/icons/heart-filled-red.svg"
                  : "/assets/icons/heart.svg"
              }
              width={20}
              height={20}
              alt="like"
            />
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-600">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {post.creator && session?.user?.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm text-teal-500 cursor-pointer "
            onClick={handleEdit}
          >Edit</p>

          <p
            className="font-inter text-sm text-pink-500 cursor-pointer"
            onClick={handleDelete}
          >Delete</p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
