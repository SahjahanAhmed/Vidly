import React, { useEffect, useState } from "react";
import { Container } from "./channel.styled";

import banner from "/SJ-banner.png";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../fetchVideos";
import Video from "./Video";
const Channel = () => {
  const [channel, setChannel] = useState([]);
  const { channelId } = useParams();

  useEffect(() => {
    fetchFromApi(`channel?part=snippet&id=${channelId}`).then((data) => {
      setChannel(data);
    });
  }, [channelId]);

  return (
    <Container>
      <div className="images">
        <img
          className="banner"
          src={channel?.meta?.image?.banner[5]?.url || banner}
          alt=""
        />
        <img
          className="profile"
          src={channel?.meta?.thumbnail[2].url || banner}
          alt=""
        />
        <div className="info">
          <p className="channel-name">{channel?.meta?.title}</p>
          <p className="subscribers">{channel?.meta?.subscriberCount}</p>
        </div>
      </div>
      <div className="channel-videos">
        {channel?.data?.map((video) => {
          return <Video key={video?.videoId} video={video} />;
        })}
      </div>
    </Container>
  );
};

export default Channel;
