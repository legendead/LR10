import React from 'react';
import './Block.css';

const Block = ({ title, description, icon }) => (
  <div className="block">
    <img src={icon} alt={title} className="block-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Block;
