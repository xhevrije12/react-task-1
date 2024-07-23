import React from 'react';
import { data } from './data';
import './styles.css';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

const DomainInfo = () => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <InfoCard 
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default DomainInfo;
