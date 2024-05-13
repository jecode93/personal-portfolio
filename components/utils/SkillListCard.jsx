import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const SkillListCard = ({content}) => {
  return (
    <div key={content.id}>
      <div className="flex items-center gap-1 text-lightestSlate">
        <FaChevronRight className="text-orange-500" />
        <p className="font-semibold">{content.title}</p>
      </div>
    </div>
  );
}

export default SkillListCard