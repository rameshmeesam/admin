import React from 'react';
import { Container } from '@material-ui/core';
import BoxSection from "../components/box-section";

class MainWrapper extends React.Component {
    render() {
        const {heading} = this.props;
        return (
       <Container maxWidth="md">
           <div>
               {heading}
           </div>
           <div>        
           <BoxSection></BoxSection>
           </div>

       </Container>
        );
    }
}

export default MainWrapper;