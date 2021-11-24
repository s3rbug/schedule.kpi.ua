import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ScheduleContainer from "../scheduleContainer";
import { mockdata } from "../../mock";
import { useGroupContext } from "../../common/context/groupContext";
import Navbar from "../../containers/navbar";
import GroupSchedule from "../groupSchedule";
import TeacherSchedule from "../teacherSchedule";

import axios from "axios";

const ScheduleRouter = () => {
  const [data, setData] = useState(mockdata);
  const { _, group } = useGroupContext();

  useEffect(() => {
    loadSchedule();
  }, [group]);

  const loadSchedule = async () => {
    if (!group) {
      return setData(mockdata);
    }
    const res = await axios.get(
      "http://167.172.103.72:5000/schedule/lessons?groupName=" + group
    );
    const shedule = res.data.data;
    console.log("sh : ");
    console.dir(shedule);
    return setData(shedule);
  };

  return (
    <Switch>
      <Route exact path="/">
        <Navbar type="group" />
        <GroupSchedule />
      </Route>
      <Route exact path="/sessions">
        <Navbar />
        <ScheduleContainer data={data} />
      </Route>
      <Route exact path="/teachers">
        <Navbar type="teachers" />
        <TeacherSchedule />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
