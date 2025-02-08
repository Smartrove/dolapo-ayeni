import { Share2 } from "lucide-react";
import { useState } from "react";
import ReusableModal from "./ReusableModal";
import { useDisclosure } from "@chakra-ui/react";

interface ShareButtonProps {
  postTitle: string;
  postId: string;
}

const ShareButton = ({ postTitle, postId }: ShareButtonProps) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const { isOpen: isOpenDialogue, onOpen, onClose } = useDisclosure();

  // Assuming your blog post URL structure
  const postUrl = `${window.location.origin}/blog/${postId}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: postTitle,
          text: `Check out this post: ${postTitle}`,
          url: postUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      onOpen();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <button className="flex items-center gap-2" onClick={handleShare}>
        <Share2 size={16} />
        Share
      </button>

      <ReusableModal
        onClose={onClose}
        size="sm"
        // showheader={true}
        header=""
        closeOnOverlayClick={true}
        px="4"
        py="4"
        isOpen={isOpenDialogue}
      >
        <div className="max-w-md">
          <h2 className="text-lg font-semibold mb-4">Share this post</h2>

          <div className="flex flex-col gap-4">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                postUrl
              )}&text=${encodeURIComponent(
                `Check out this post: ${postTitle}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
            >
              <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on Twitter
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                postUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
            >
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Share on Facebook
            </a>

            <button
              onClick={handleCopyLink}
              className={`flex items-center justify-center gap-2 ${
                copySuccess ? "bg-green-500" : ""
              }`}
            >
              {copySuccess ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </ReusableModal>
    </>
  );
};

export default ShareButton;
