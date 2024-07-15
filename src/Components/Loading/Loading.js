import React from 'react';
import loadingGif from '../../assets/img/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className="loading">
      <h4>Rooms data loading...</h4>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
};

export default Loading;
