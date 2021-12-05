import {
  ScheduleItemExtendedUnit,
  ScheduleItemExtendedWrapper,
} from "./scheduleItemExtended.style";
import ScheduleItemContent from "../../components/scheduleItemContent";

const ScheduleItemExtended = ({ lessons, currentDay }) => {
  return lessons.length ? (
    <ScheduleItemExtendedWrapper items={lessons.length}>
      {lessons.map((item) => {
        return (
          <ScheduleItemExtendedUnit>
            <ScheduleItemContent scheduleItemData={item} />
          </ScheduleItemExtendedUnit>
        );
      })}
    </ScheduleItemExtendedWrapper>
  ) : null;
};

export default ScheduleItemExtended;
