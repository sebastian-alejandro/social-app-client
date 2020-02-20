import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    card: {
        display: 'flex'
    }
}

class Post extends Component {
    render() {
        const {classes, post: {body, createdAt, userImage, userName, postId, likeCount, commentCount}} = this.props;
        return (
            <Card>
                <CardMedia
                    image={userImage}
                    title="Profile image"/>
                <CardContent>
                    <Typography variant="h5">{userName}</Typography>
                    <Typography variant="body2">{createdAt}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Post);