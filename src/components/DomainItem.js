import React from 'react';
import './DomainItem.css';

const DomainItem = ({ title, description }) => {
  return (
    <div className="domain-item">
      <div className="icon">
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DomainItem;
