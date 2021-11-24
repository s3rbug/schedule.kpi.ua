import { useState, useEffect } from "react";
import ScheduleContainer from "../scheduleContainer";
import { mockdata } from "../../mock";
import { useLecturerContext } from "../../common/context/lecturerContext";
import axios from "axios";

const TeacherSchedule = (props) => {
  const [data, setData] = useState(mockdata);
  const {lecturer, setLecturer} = useLecturerContext();
  
  useEffect(() => {
    loadSchedule();
  }, [lecturer]);

  const loadSchedule = async () => {
    if (!lecturer) {
      return setData(mockdata);
    }
    const res = await axios.get(
      "http://167.172.103.72:5000/schedule/lecturer?lecturerId=" +
      lecturer
    );
    const shedule = res.data.data;
    console.log("sh : ");
    console.dir(shedule);
    return setData(shedule);
  };

  return <ScheduleContainer data={data} />;
};

export default TeacherSchedule;
