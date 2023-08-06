import React from 'react';
import html2pdf from 'html2pdf.js';
import '../styles/CertificateTemplate.css';

const CertificateTemplate = ({ name, course, date }) => {
  const handleDownload = () => {
    const content = document.getElementById('certificate');
    const opt = {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    const pdf = html2pdf().from(content);
    pdf.outputPdf().then(() => {
      pdf.save();
    });
  };



  return (
    <div className="certificate" id="certificate">
      <h2>Certificate of Donation</h2>
      <p>We hereby express our sincere appreciation to</p>
      <h3>{name}</h3>
      <p>In recognition of your generosity and compassionate support. We are grateful for your donation.</p>
    
      
    </div>
  );
};

export default CertificateTemplate;


