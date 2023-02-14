import React from 'react';
import video2 from './video/video2.mp4'
import './css/videostyle.css'

const Video = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        videoRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   <div className='videocontainer'>
   <video ref={videoRef} autoPlay loop>
      <source src={video2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  );
};

export default Video;