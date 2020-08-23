import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardBody, CardText } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);

  const loginSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      setAuth(false);
    } else {
      sessionStorage.setItem("token", payload.token);

      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    }
  };
  const classes = useStyles();
  return (
    <Container>
      <h2>Login</h2>
      {!auth && (
        <Card>
          <CardBody>
            <CardText className="text-white m-0 warning">
              Invalid credentials, please try again
            </CardText>
          </CardBody>
        </Card>
      )}
      <form className={classes.root} autoComplete="off" onSubmit={loginSubmit}>
        <div className="input-style">
          <TextField
            id="usernameEntry"
            className="input-style"
            label="Username"
            color="secondary"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-style">
          <TextField
            id="passwordEntry"
            type="password"
            className="input-style"
            label="Password"
            color="secondary"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
            type="submit"
          >
            Sign in
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
