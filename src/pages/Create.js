import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Send, Delete, Email, AddAPhoto, AddShoppingCart, Crop } from '@material-ui/icons/'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import { FormControl, FormControlLabel, FormLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { useHistory } from 'react-router'


const useStyles = makeStyles({ 
  btn: {
    fontSize: 20,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'red'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 5 
  },
  field: {
    marginTop: 20,
    marginBottom: 20
  }
})

export default function Create() {
  const history = useHistory()
  const classes = useStyles()

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')


  const handleSubmit = e => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }

    setTitle("")
    setDetails("")
  }

  return (
    <>
      <Container>
        <div style={{marginTop: '5vh'}}></div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e)=> setTitle(e.target.value)}
            className={classes.field}
            label="Note title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={true}
            error={titleError}
          />
          <TextField
            onChange={(e)=> setDetails(e.target.value)}
            className={classes.field}
            label="Details"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            multiline
            rows={4}
            error={detailsError}
          />

          <div style={{marginBottom: '2vh'}}>
            <FormControl className={classes.field}>
              <FormLabel>Note Category</FormLabel>
              <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel value="money" control={<Radio />} label="Food" />
                <FormControlLabel value="music" control={<Radio />} label="Music" />
                <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                <FormControlLabel value="work" control={<Radio />} label="Work" />
              </RadioGroup>
            </FormControl>
          </div>

          <Button
            color="secondary"
            variant="contained"
            endIcon={<Send />}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}
