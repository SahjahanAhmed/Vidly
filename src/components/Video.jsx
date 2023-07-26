import React, { useState } from "react";
import { VideoContainer } from "./video.styled";

import { BsThreeDotsVertical } from "react-icons/bs";
import MoreActions from "./MoreActions";
import { Link, useNavigate } from "react-router-dom";

const Video = ({ video }) => {
  const [showMoreActions, setShowMoreActions] = useState(false);
  const navigate = useNavigate();

  // hide the more action card if it not focused
  document.body.addEventListener("click", (e) => {
    if (
      e.target.className !== "more-actions" &&
      e.target.parentElement.className !== "three-dots-btn" &&
      showMoreActions
    ) {
      setShowMoreActions(false);
    }
  });
  // format number
  const formatNumber = (number) => {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "b";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "k";
    }
    return number.toString();
  };

  return (
    <VideoContainer>
      <div className="browse-video-div">
        <img
          onClick={() => {
            navigate(`/watch/${video?.videoId}`);
          }}
          src={video?.thumbnail[1]?.url}
          alt={""}
        />
        <div className="browse-video-bottom">
          {/* browse-video-info */}
          <div className="browse-video-info">
            {video?.channelThumbnail && (
              <Link to={`/channel/${video?.channelId && video?.channelId}`}>
                <img
                  src={
                    video?.channelThumbnail && video?.channelThumbnail[0]?.url
                  }
                  alt=""
                />
              </Link>
            )}
            <div>
              <p>
                {video?.title?.slice(0, 72)}
                {video?.title?.length > 72 && "..."}
              </p>
              <p>{video?.channelTitle}</p>
              <p>
                <span>{formatNumber(video?.viewCount)} views</span> .
                <span>{video?.publishedText}</span>
              </p>
            </div>
          </div>
          {/* browse-video-more-actions */}
          <div className="browse-video-more-actions">
            <button
              onClick={() =>
                setShowMoreActions(showMoreActions ? false : video?.videoId)
              }
              className="three-dots-btn"
            >
              <BsThreeDotsVertical />
            </button>
            {showMoreActions && showMoreActions == video?.videoId && (
              <MoreActions />
            )}
          </div>
        </div>
      </div>
    </VideoContainer>
  );
};

export default Video;
