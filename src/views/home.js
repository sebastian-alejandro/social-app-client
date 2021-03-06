import React, {Component} from 'react';
import axios from 'axios';

import Grid from "@material-ui/core/Grid";

import Post from "../components/post";

class Home extends Component {

    state = {
        posts: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    posts: response.data
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        let recentPostsMarkup = this.state.posts ? (
            this.state.posts.map((post) => <Post post={post}/>)
        ) : <p>Loading...</p>
        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    {recentPostsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile... </p>
                </Grid>
            </Grid>
        );
    }
}

export default Home;