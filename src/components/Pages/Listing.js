import React, { useEffect, useState } from 'react'

import parseJwt from '../../helpers/authHelper'
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Listings = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).id
    const [listing, setListing] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    const postUser = async () => {
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])

    const classes = useStyles();
    return (
        <Container>
            <h2>Listings for user: {user}</h2>

            <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listing.length === 0 &&
                            <TableRow><TableCell colSpan="4" className="text-center"><i>No listings found</i></TableCell></TableRow>
                        }
                        {listing.length > 0 &&
                            listing.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.phoneNumber}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <TableRow className="my-5">
                <Button onClick={logout} variant="contained">Logout</Button>
            </TableRow>

            <form className={classes.root} autoComplete="off" onSubmit={postUser}>
                <div className="input-style">
                    <TextField id="nameEntry" className="input-style" label="Name" color="secondary" required value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="input-style">
                    <TextField id="usernameEntry" className="input-style" label="Username" color="secondary" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="input-style">
                    <TextField id="passwordEntry" type="password" className="input-style" label="Password" color="secondary" onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <Button className={classes.button} variant="contained" color="default" type="submit">Submit</Button>
                </div>

            </form>

        </Container>
    )
}

export default Listings