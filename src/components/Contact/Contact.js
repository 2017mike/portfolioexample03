import {useState} from 'react'
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    nameNeeded: false,
    messageNeeded: false,
    invalidEmail: false
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  const handleNameBlur = () => {
    if(formState.name==='') {
      setFormState({...formState, nameNeeded: true, messageNeeded: false, invalidEmail: false})
    }
  }
   const handleMessageBlur = () => {
    if(formState.message==='') {
      setFormState({...formState, messageNeeded: true, nameNeeded: false, invalidEmail: false})
    }
  }

    const validateEmail = (inputText) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(inputText.match(mailformat))
              {
              return true
           }
              else {
             return false
          }
    }



  const handleEmailBlur = () => {
    if(validateEmail(formState.email)===true)
    {
      console.log('valid email')

    } else {
      setFormState({...formState, invalidEmail: true, nameNeeded: false, messageNeeded: false})
    }

  }


  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3} padding={2}>
        <Grid item xs={12} md={8} lg={7}>
          <FormControl fullWidth>
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input 
          name="name"
          onChange={handleInputChange}
          aria-describedby="my-helper-text"
          onBlur={handleNameBlur}
          />
          
      </FormControl>
        </Grid>
        <Grid item xs={12} md={8} lg={7}>
          <FormControl fullWidth>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input 
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleInputChange}
          aria-describedby="my-helper-text" />
          
      </FormControl>
        </Grid>
      <Grid item xs={12} md={8} lg={7}>
        <TextField
         
          label="Message"
          multiline
          rows={4}
          fullWidth
          name="message"
          onChange={handleInputChange}
          onBlur={handleMessageBlur}
        />
        </Grid>
      </Grid>
    <Grid container justifyContent="center">
      <Grid item>
        <Button>Submit</Button>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
     {
       formState.nameNeeded? <p> name is required! </p> : ''
     }
     {
       formState.messageNeeded? <p> message is required! </p> : ''
     }
     {
       formState.invalidEmail? <p> email is invalid! </p> : ''
     }
    </Grid>
      
    </>
  )
}

export default Contact
