import React from 'react';
import Container from '@material-ui/core/Container';


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Resume = () => {
    return (
        <Container>

            <h2 >Resume </h2>
            <p>IT Guy</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Diam in arcu cursus euismod quis viverra. Hendrerit dolor magna eget est
                    lorem ipsum dolor sit amet</p>
            <ul className="resume-style">
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                </li>
                <li>
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna aliqua
                </li>
                <li>
                    Lorem ipsum dolor sit amet,  labore  et dolore magna aliqua
                </li>

                <li>
                    Massa tincidunt dui ut ornare lectus.
                </li>
                <li>
                    it amet facilisis magna etiam tempor orci eu. Massa
                </li>
                <li>
                    it amet facilisis magna etiam tempor orci eu. Massa
                </li>
            </ul>
            <h3>Projects</h3>
            <div className="project-display">
                <div className="card">
                    <CardContent>
                        <Typography variant="h5" component="h5">To-do App</Typography>
                        <Typography variant="body2" component="p">Add and edit tasks using jQuery</Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://github.com/hdarparish/todo-app">Github</a>
                    </CardActions>
                </div>
                <div className="card">
                    <CardContent>
                        <Typography variant="h5" component="h2">Toronto Page</Typography>
                        <Typography variant="body2" component="p">Toronto famous sites gallery </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://github.com/hdarparish/toronto-website">Github</a>
                    </CardActions>
                </div>
            </div>
        </Container>

    );
}

export default Resume;