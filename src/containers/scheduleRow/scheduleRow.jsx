import ScheduleItem from '../scheduleItem';
import ScheduleItemExtended from '../scheduleItemExtended/scheduleItemExtended';
import React from 'react';
import { EmptyElement } from './scheduleRow.style';

const ScheduleRow = ({dataset}) => {

  const generateScheduleItem = dataset => {
    return dataset.map((item, index) => {
      return item ? <ScheduleItemExtended key={index} lessons={item.lessons} currentDay={item.currentDay}/> 
      :
       <EmptyElement key={index}/>;
    });
  };
  return (
    <>
      {generateScheduleItem(dataset)}
    </>
  );
};

export default ScheduleRow;