import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Loading = (props) => (
  <Block>
    <ContentLoader
      speed={2}
      width={340}
      height={160}
      viewBox="0 0 340 160"
      backgroundColor="#292929"
      foregroundColor="#343434"
      {...props}>
      <rect x="0" y="0" rx="6" ry="6" width="170" height="20" />
      <rect x="0" y="36" rx="6" ry="6" width="340" height="46" />
      <rect x="9" y="168" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="98" rx="6" ry="6" width="340" height="46" />
    </ContentLoader>
  </Block>
);

const Block = styled.div`
  padding-top: 32px;
`;

export default Loading;
