import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
   root: {
      '& > *': {
         margin: theme.spacing(1),
         width: '25ch'
      },
   },
}));

const Contact = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")
   const [content, setContent] = useState("")


   const formSubmit = async event => {
      event.preventDefault()
      const response = await fetch('http://localhost:4000/contact_form/entries', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ name, email, phoneNumber, content })
      })
      const payload = await response.json()
      if (response.status >= 400) {
         alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
      } else {
         alert(`Congrats! Submission submitted with id: ${payload.id}`)
      }
   }
   const classes = useStyles();
   return (
      <div>
         <Container>
            <h1>Contact US</h1>
            <p>Contact US page body content</p>

            <form className={classes.root} autoComplete="off" onSubmit={formSubmit}>
               <div className="input-style">
                  <TextField id="emailEntry" className="input-style" label="Email" color="secondary" required value={email} onChange={e => setEmail(e.target.value)} />
               </div>

               <div className="input-style">
                  <TextField id="phoneEntry" type="phone" className="input-style" label="Phone Number" color="secondary" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
               </div>

               <div className="input-style">
                  <TextField id="nameEntry" type="name" className="input-style" label="Full Name" color="secondary" required value={name} onChange={e => setName(e.target.value)} />
               </div>

               <div className="input-style">
                  <TextField id="messageEntry" type="textarea" className="input-style" label="Message" color="secondary" required value={content} onChange={e => setContent(e.target.value)} />
               </div>

               <div>
                  <Button className={classes.button} variant="contained" color="default" type="submit">Submit</Button>
               </div>


            </form>
         </Container>
      </div>
   );
}

export default Contact;