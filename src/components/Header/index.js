import { Link } from 'gatsby';
import { Container, Wrapper } from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
    <Container>
        <Wrapper>
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </Wrapper>
    </Container>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
