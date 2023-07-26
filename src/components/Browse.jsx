import React, { useEffect, useState } from "react";
import { Container } from "./browse.styled";

import { fetchFromApi } from "../fetchVideos";
import Video from "./Video";
const Browse = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);

  // calling the fetchVideos function
  useEffect(() => {
    setSelectedCategory(category);
    fetchFromApi(`search?part=snippet&query=${selectedCategory}`)
      .then((data) => {
        setVideos(data ? data.data : []);
      })
      .catch((error) => {
        console.log(error);
        setVideos([]);
      });
  }, [selectedCategory, category]);

  return (
    <Container>
      <h2>{selectedCategory === "new" ? "All" : selectedCategory}</h2>

      {/* browse-video-div */}
      {videos &&
        videos?.map((video) => {
          return <Video key={video?.videoId} video={video} />;
        })}
    </Container>
  );
};

export default Browse;
