import React, { useState } from 'react';
import CertificateTemplate from './CertificateTemplate';
import DownloadButton from './Download';
import html2pdf from 'html2pdf.js';
import '../styles/Certificate.css'; // Import a CSS file for styling

const CertificatePage = () => {
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const generateCertificate = () => {
    if (name.trim() !== '') {
      setShowCertificate(true);
    }
  };

  const handleDownload = async () => {
    const content = document.getElementById('certificate');
    const opt = {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    try {
      const pdf = await html2pdf().from(content);
      const pdfOutput = await pdf.output();
      const pdfBlob = new Blob([pdfOutput], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = opt.filename;
      link.click();
    } catch (error) {
      console.error('Error generating or downloading the certificate:', error);
    }
  };

  return (
    <div className="container">
      <div className="certificate-form">
        <h1>Thank You!</h1>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <button onClick={generateCertificate}>Generate Certificate</button>
      </div>
      {showCertificate && <CertificateTemplate name={name} />}
      {showCertificate && (
        <div className="download-button-container">
          <DownloadButton onClickDownload={handleDownload} />
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
