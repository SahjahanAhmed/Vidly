import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { Container } from "./watchHere.styled";
import ReactPlayer from "react-player";

import dateFormat from "dateformat";
import sj from "/SJ.jpg";
import MoreActions from "./MoreActions";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../fetchVideos";
const WatchHere = () => {
  const [showMoreActions, setShowMoreActions] = useState(false);
  const [videoStatistics, setVideoStatistics] = useState("");
  const { videoId } = useParams();

  useEffect(() => {
    fetchFromApi(`video?part=snippets,statistics&id=${videoId}`).then(
      (data) => {
        setVideoStatistics(data);
      }
    );
  }, [videoId]);
  const {
    viewCount,
    likeCount,
    title,
    uploadDate,
    description,
    channelTitle,
    channelId,
  } = videoStatistics;

  // hide the more action card if it not focused
  document.body.addEventListener("click", (e) => {
    e.stopPropagation();
    const button = e.target.closest(".more-actions");
    const icon = e.target.closest(".three-dots-btn");

    if (!button && !icon && showMoreActions) {
      setShowMoreActions(false);
    }
  });
  return (
    <Container>
      <div className="watch-left">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        />
        <div>
          <p className="title">{title}</p>
          <div className="info">
            <div className="channel-info">
              <Link to={`/channel/${channelId}`}>
                <img src={sj} alt="" />
              </Link>
              <div>
                <Link to={`/channel/${channelId}`}>
                  <p className="Channel-name">{channelTitle}</p>
                </Link>
                <p className="channel-subscribers">174k subscribers</p>
              </div>
              <div className="subscribe-div">Subscribe</div>
            </div>
            <div className="other-info">
              <div className="like-dislike-info">
                <button>
                  <span>
                    <BiLike />
                  </span>{" "}
                  {likeCount}
                </button>
                <button>
                  <span>
                    <BiDislike />
                  </span>
                </button>
              </div>
              <div className="share-info">
                {" "}
                <span>
                  {" "}
                  <FaShare />
                </span>
                Share
              </div>
              <div className="three-dot-div">
                <button
                  className="three-dots-btn"
                  onClick={() =>
                    showMoreActions
                      ? setShowMoreActions(false)
                      : setShowMoreActions(true)
                  }
                >
                  <BsThreeDots />
                </button>

                {showMoreActions && <MoreActions />}
              </div>
            </div>
          </div>
          <div className="description">
            <p>
              <span>{parseInt(viewCount).toLocaleString()} views</span>{" "}
              <span>{dateFormat(uploadDate, " mmmm dS, yyyy")}</span>
            </p>
            {description}
            <button>see more</button>
          </div>
        </div>
      </div>

      <div className="watch-right">
        <div className="total-comments-and-sorts">
          <p>105 Comments</p>{" "}
          <button>
            <span>
              <FiFilter />
            </span>{" "}
            Sort by
          </button>
        </div>
        <div className="add-comment-div">
          <img src={sj} alt="" />
          <div>
            <textarea placeholder="Add your comment..." />
            <div>
              <button>Cancel</button>
              <button>Comment</button>
            </div>
          </div>
        </div>
        <div className="all-comments">
          <li>
            <img src={sj} alt="" />
            <div>
              <p>
                <span>Sahjahan Ahmed </span>
                <span>one hour ago</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                enim amet fugiat quaerat, eum molestiae perspiciatis vel hic
                tempora.
              </p>

              <div>
                <span>
                  <button>
                    <BiLike />
                  </button>{" "}
                  9
                </span>
                <button>
                  <BiDislike />
                </button>
                <button>Reply</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </Container>
  );
};

export default WatchHere;
