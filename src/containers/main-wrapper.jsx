import React from 'react';
import { Container } from '@material-ui/core';

class MainWrapper extends React.Component {
    render() {
        const {heading} = this.props;
        return (
       <Container maxWidth="sm">
           {heading}
       </Container>
        );
    }
}

export default MainWrapper;