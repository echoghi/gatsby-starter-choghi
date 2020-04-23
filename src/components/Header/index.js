import { Container, Wrapper, Heading, NavLink } from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle = '' }) => (
    <Container>
        <Wrapper>
            <Heading>
                <NavLink to="/">{siteTitle}</NavLink>
            </Heading>
        </Wrapper>
    </Container>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
