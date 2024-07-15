import React from 'react';
import styled from 'styled-components';

const StyledHeroWrapper = styled.div`
  height: 60vh;
  background: url('/path/to/default/image.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHero = ({ className, children }) => {
  return <StyledHeroWrapper className={className}>{children}</StyledHeroWrapper>;
};

export default StyledHero;
