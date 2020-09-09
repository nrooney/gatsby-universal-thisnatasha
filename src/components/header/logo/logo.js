import React from 'react';
import logoimagsrc from '../../../images/logo.png';
import Title from 'components/title';
import { Link } from 'gatsby';
import { LogoImage } from './logo.css';

const Logo = ({ title }) => (
  <Link to="/" alt={title}>
    <LogoImage src={logoimagsrc} alt={title} />
    <Title as="h1">{title}</Title>
  </Link>
);

export default Logo;
