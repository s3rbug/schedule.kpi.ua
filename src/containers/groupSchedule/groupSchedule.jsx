import { useState, useEffect } from "react";
import ScheduleContainer from "../scheduleContainer";
import { mockdata } from "../../mock";
import { useGroupContext } from "../../common/context/groupContext";
import axios from "axios";

const GroupSchedule = (props) => {
  const [data, setData] = useState(mockdata);
  const { _, currentGroup } = useGroupContext();

  useEffect(() => {
    loadSchedule();
  }, [currentGroup]);

  const loadSchedule = async () => {
    if (!currentGroup) {
      return setData(mockdata);
    }
    const res = await axios.get(
      "http://167.172.103.72:5000/schedule/lessons?groupName=" + currentGroup
    );
    const shedule = res.data.data;
    return setData(shedule);
  };

  return <ScheduleContainer data={data} />;
};

export default GroupSchedule;
