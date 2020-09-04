import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import { Link } from 'gatsby';

const Item = ({ title, copy, image, linkurl }) => (
  <figure>
    <Link to={linkurl} alt={title}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </Link>
    <figcaption>
      <Link to={linkurl} alt={title}>
        <Title>{title}</Title>
      </Link>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  linkurl: PropTypes.string,
};

export default Item;
