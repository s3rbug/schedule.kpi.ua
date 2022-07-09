import { useEffect, useRef } from 'react';
import { useScrollRef } from '../../common/context/scrollRefsContext';
import { Container, Divider, InnerContainer, TimeCell } from './timeDivider.style';

const TimeDivider = ({index, children}) => {
  const ref = useRef(null)
  const executeScroll = () => ref.current.scrollIntoView();
  const {refs, setRefs} = useScrollRef()
  useEffect(() => {
    if(!refs[index]){
      setRefs({...refs, [index]: ref})
  }
  }, [ref, index, setRefs, refs])
  return (
    <Container>
      <InnerContainer alignItems="center">
        <TimeCell onClick={executeScroll}>{children}</TimeCell>
        <Divider ref={ref}/>
      </InnerContainer>
    </Container>
  );
};

export default TimeDivider;