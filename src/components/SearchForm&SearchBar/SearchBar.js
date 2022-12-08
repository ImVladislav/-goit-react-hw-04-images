import PropTypes from 'prop-types';
import { StyledBar } from './SearchBar.styled';

export const SearchBar = ({ children }) => {
  return <StyledBar>{children}</StyledBar>;
};

SearchBar.propType = {
  children: PropTypes.node.isRequired,
};