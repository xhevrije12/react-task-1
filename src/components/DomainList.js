import React from 'react';
import DomainItem from './DomainItem';
import domainData from '../data';
import './DomainList.css';

const DomainList = () => {
  return (
    <div className="domain-list">
      {domainData.map((item, index) => (
        <DomainItem key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default DomainList;
