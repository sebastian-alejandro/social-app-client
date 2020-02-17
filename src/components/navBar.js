import React, {Component} from 'react';
import Link from "react-router-dom/Link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class NavBar extends Component {
    render() {
        return (
            <AppBar>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/signup">SignUp</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}

export default NavBar;