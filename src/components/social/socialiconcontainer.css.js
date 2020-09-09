import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const SocialIconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;

  a {
    width: 70px !important;
    height: 70px !important;

    ${MEDIA.TABLET`
    width: 50px !important;
    height: 50px !important;
  `};
  }
`;
