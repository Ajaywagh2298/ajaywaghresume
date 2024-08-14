import React, { useState, useEffect } from 'react';
import './Admin.css'; // Ensure the CSS file is in the same directory or adjust the path

const Admin = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    // Fetch the contact data from the JSON file
    fetch('/data/contactData.json')
      .then(response => response.json())
      .then(data => setContactData(data))
      .catch(error => console.error('Error fetching contact data:', error));
  }, []);

  if (!contactData) {
    return <div>Loading...</div>;
  }

  const { contactInfo } = contactData;

  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <h2>Contact Information</h2>
      <div className="contact-info">
        <p><strong>Address:</strong> {contactInfo.address}</p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <div className="social-links">
          <p><strong>Social Links:</strong></p>
          <ul>
            {contactInfo.socialLinks.facebook && <li><a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>}
            {contactInfo.socialLinks.twitter && <li><a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>}
            {contactInfo.socialLinks.linkedin && <li><a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
