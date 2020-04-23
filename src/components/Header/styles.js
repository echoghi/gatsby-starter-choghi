import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '@theme';

export const Container = styled.header`
    background: ${theme.colors.primary};
    margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${theme.contentWidth}px;
    padding: 1.45rem 1.0875rem;
`;

export const Heading = styled.h1`
    margin: 0;
`;

export const NavLink = styled(Link)`
    color: ${theme.colors.white};
    text-decoration: none;
`;
