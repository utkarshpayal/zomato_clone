import React, { useState } from 'react';
import './VideosComponent.css';

const VideosComponent = () => {
  // Array of fixed video links
  const videoLinks = [
    {
      title: "Easy Pizza Recipe",
      link: "https://www.youtube.com/embed/BjjP0HQsblg"
    },
    {
      title: "Homemade Pizza Tutorial",
      link: "https://www.youtube.com/embed/J4o8a_XMULQ"
    },
    {
      title: "Chocolate Cake Recipe",
      link: "https://www.youtube.com/embed/3qQvH1BUnfg"
    },
    {
      title: "Easy Pizza Recipe",
      link: "https://www.youtube.com/embed/BjjP0HQsblg"
    },
    {
      title: "Homemade Pizza Tutorial",
      link: "https://www.youtube.com/embed/J4o8a_XMULQ"
    },
    {
      title: "Chocolate Cake Recipe",
      link: "https://www.youtube.com/embed/3qQvH1BUnfg"
    }, {
      title: "Easy Pizza Recipe",
      link: "https://www.youtube.com/embed/BjjP0HQsblg"
    },
    {
      title: "Homemade Pizza Tutorial",
      link: "https://www.youtube.com/embed/J4o8a_XMULQ"
    },
    {
      title: "Chocolate Cake Recipe",
      link: "https://www.youtube.com/embed/3qQvH1BUnfg"
    }, {
      title: "Easy Pizza Recipe",
      link: "https://www.youtube.com/embed/BjjP0HQsblg"
    },
    {
      title: "Homemade Pizza Tutorial",
      link: "https://www.youtube.com/embed/J4o8a_XMULQ"
    },
    {
      title: "Chocolate Cake Recipe",
      link: "https://www.youtube.com/embed/3qQvH1BUnfg"
    }, {
      title: "Easy Pizza Recipe",
      link: "https://www.youtube.com/embed/BjjP0HQsblg"
    },
    {
      title: "Homemade Pizza Tutorial",
      link: "https://www.youtube.com/embed/J4o8a_XMULQ"
    },
    {
      title: "Chocolate Cake Recipe",
      link: "https://www.youtube.com/embed/3qQvH1BUnfg"
    }, {
      title: "Easy Pizza Recipe",
      link: "https://www.youtube.com/embed/BjjP0HQsblg"
    },
    {
      title: "Homemade Pizza Tutorial",
      link: "https://www.youtube.com/embed/J4o8a_XMULQ"
    },
    {
      title: "Chocolate Cake Recipe",
      link: "https://www.youtube.com/embed/3qQvH1BUnfg"
    }, 
    // Add more video links here
  ];

  const [visibleVideos, setVisibleVideos] = useState(8);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  const handleLoadMore = () => {
    setVisibleVideos(prevVisibleVideos => prevVisibleVideos + 8);
  };

  return (
    <div className="videos-page">
      <h1 className='videos-title'>Cooking Recipe Videos</h1>
      <div className="videos-container">
        {videoLinks.slice(0, visibleVideos).map((video, index) => (
          <div key={index} className="video-item" onClick={() => handleClick(video)}>
            <img src={`https://img.youtube.com/vi/${video.link.split('/').pop()}/hqdefault.jpg`} alt={video.title} />
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
      {visibleVideos < videoLinks.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
        </div>
      )}
      {selectedVideo && (
        <div className="video-modal">
          <div className="video-player">
            <button className="close-button" onClick={handleClose}>X</button>
            <iframe
              title={selectedVideo.title}
              width="100%"
              height="315"
              src={selectedVideo.link}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosComponent;
