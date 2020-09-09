import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, ItemURL } from './item.css';

const Item = ({ title, copy, image, linkurl }) => (
  <figure>
    <a href={linkurl} alt={title} target="_blank" rel="noopener noreferrer">
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </a>
    <figcaption>
      <ItemURL
        href={linkurl}
        alt={title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Title>{title}</Title>
      </ItemURL>
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
