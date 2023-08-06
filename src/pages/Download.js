// DownloadButton.js
import React from 'react';

const Download = ({ onClickDownload }) => {
  return (
    <div className="download-button">
      <button onClick={onClickDownload}>Download</button>
    </div>
  );
};

export default Download;
