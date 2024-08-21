import React from 'react';

interface TagProps {
  value: any;
}

const Tag: React.FC<TagProps> = ({ value }) => {
  return <span className="tag">{value}</span>;
};

export default Tag;
