import React from "react";
import { AppBar, Toolbar, Container, Box } from '@material-ui/core';

const BoxSection = () => {
    return (
    <React.Fragment>
    <AppBar position="static">
    <Toolbar>File Upload</Toolbar>
    </AppBar>
    <Container>
        <Box my={2}>
            hello this is content here
        </Box>
    </Container>
    </React.Fragment>
    )
}

export default BoxSection;
