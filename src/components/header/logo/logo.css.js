import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const LogoImage = styled.img`
  padding-bottom: 10px;
  max-width: 300px;

  ${MEDIA.TABLET`
    max-width: 200px;
  `};
`;
