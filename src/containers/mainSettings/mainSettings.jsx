import ScheduleTypeTabs from '../scheduleTypeTabs';
import EntitySearch from '../../components/entitySearch';
import GroupSearch from '../../components/groupSearch/groupSearch';
import WeekSwitch from '../../components/weekSwitch';
import { MainSettingsContainer } from './mainSettings.style';

const MainSettings = (props) => {
  return (
    <MainSettingsContainer flexDirection="column" alignItems="center" gap="24px">
      <ScheduleTypeTabs/>
        { props.type === "teachers" ? <EntitySearch/> : <GroupSearch/>}
      <div style={{width: '100%'}}>
        <WeekSwitch/>
      </div>
    </MainSettingsContainer>
  );
};

export default MainSettings;
