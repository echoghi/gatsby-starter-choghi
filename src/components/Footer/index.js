import React from 'react';
import config from '@config';
import { Container } from './styles';

const Footer = ({}) => (
    <Container>
        © {new Date().getFullYear()}, {config.author}
    </Container>
);

export default Footer;
