import React from 'react';
import Container from '@material-ui/core/Container';


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

                    <li>
                        it amet facilisis magna etiam tempor orci eu. Massa
                        tincidunt dui ut ornare lectus. Volutpat odio facilisis mauris sit amet. Ullamcorper morbi tincidun
                </li>
                    <li>
                        Volutpat odio facilisis mauris sit amet. Ullamcorper morbi tincidunt
                        ornare massa eget egestas purus viverra.
                </li>
                    <li>
                        Sit amet facilisis magna etiam tempor orci eu. Massa
                        tincidunt dui ut ornare lectus. Volutpat odio facilisis mauris sit amet. Ullamcorper morbi tincidunt
                        ornare massa eget egestas purus viverra.
                </li>
                </ul>
                <h2>Projects</h2>
                <div className="project-display">


                <div className="card">
                    <CardContent>
                        <Typography variant="h5" component="h2">To-do App</Typography>
                        <Typography variant="body2" component="p">Add and edit tasks using jQuery</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Demo</Button>
                        <Button size="small">Github</Button>
                    </CardActions>
                </div>
                <div className="card">
                    <CardContent>
                        <Typography variant="h5" component="h2">Toronto Website</Typography>
                        <Typography variant="body2" component="p">Toronto famous sites gallery </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Demo</Button>
                        <Button size="small">Github</Button>
                    </CardActions>
                </div>
                </div>
            </Container>

    );
}

export default Resume;