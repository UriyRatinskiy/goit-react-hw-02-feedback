import { PropTypes } from 'prop-types';
import { SectionPart, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionPart>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionPart>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
