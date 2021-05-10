import React from 'react'

export default function FirstSteps() {
  return (
    <div>
              <div>
        <Typography 
          variant="h1" 
          component="h2"
          color="primary"
          gutterBottom
        >
          Create a New Note
        </Typography>
        <Typography 
            variant="h2" 
            component="h2"
            color="secondary"
            gutterBottom
          >
            Create a New Note
          </Typography>
        <Typography 
          className={classes.title}
          variant="h3" 
          component="h2"
          color="textPrimary"
          gutterBottom
        >
          Create a New Note
        </Typography>
        <Typography 
            variant="h4" 
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            Create a New Note
          </Typography>
        <Typography 
            variant="h5" 
            component="h2"
            gutterBottom
          >
            Create a New Note
          </Typography>
          <Typography 
            variant="h6" 
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            Create a New Note
          </Typography>
          <Button
            variant="contained"
            color="primary"
          >
            button
          </Button>
          <Button
            variant="outlined"
            color="secondary"
          >
            button
          </Button>
          <Button
            variant="text"
          >
            button
          </Button>
        </div>
        
        <div style={{paddingTop: '5vh'}}>
          <ButtonGroup color="primary">
            <Button variant="contained">One</Button>
            <Button>Two</Button>
            <Button variant="contained">Three</Button>
          </ButtonGroup>
        </div>

        <div style={{paddingTop: '5vh'}}>
          <ButtonGroup color="secondary">
            <Button>One</Button>
            <Button variant="contained">Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>

        <div style={{paddingTop: '5vh'}}>
          <ButtonGroup>
            <Button color="primary" variant="contained">One</Button>
            <Button variant="outlined">Two</Button>
            <Button color="secondary" variant="contained">Three</Button>
          </ButtonGroup>
        </div>

        <div style={{ marginTop: '5vh' }}>
          {/* Buttons with icons */}
          <Button
            onClick={() => console.log('You clicked me!')}
            variant="contained"
            color="primary"
            size="small"
            endIcon={<Send />}
          >
            Send
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<Delete />}
          >
            button
          </Button>
          <Button
            variant="contained"
            size="large"
            endIcon={<Email />}
          >
            E-mail
          </Button>

          <Button
            onClick={() => console.log('You clicked me!')}
            variant="contained"
            color="primary"
            size="small"
            endIcon={<AddAPhoto />}
          >
            Photo
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<AddShoppingCart />}
          >
            Shop
          </Button>
          <Button
            variant="outlined"
            size="large"
            endIcon={<Crop />}
            color="primary"
          >
            Crop
          </Button>
        </div>

        <div style={{ paddingTop: '5vh' }}>
          {/* Icons only */}
          <Crop fontSize="small" color="primary" />
          <Crop fontSize="small" color="secondary" />
          <Crop fontSize="small" color="action" />

          <AddAPhoto color="primary" />
          <AddAPhoto color="secondary" />
          <AddAPhoto color="error" />

          <Email fontSize="large" color="primary" />
          <Email fontSize="large" color="secondary" />
          <Email fontSize="large" color="disabled" />
        </div>

        <div style={{ paddingTop: '5vh'}}>
          <Button
            className={classes.btn}
            color="secondary"
            variant="contained"
          >
            Styled btn
          </Button>
        </div>
    </div>
  )
}
