import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../Card'

const Work = () => {
  let projects = [{
    title: 'example1',
    github: 'https://github.com/',
    heroku: 'https://dashboard.heroku.com/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'example2',
    github: 'https://github.com/',
    heroku: 'https://dashboard.heroku.com/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'example3',
    github: 'https://github.com/',
    heroku: 'https://dashboard.heroku.com/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'example4',
    github: 'https://github.com/',
    heroku: 'https://dashboard.heroku.com/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'example',
    github: 'https://github.com/',
    heroku: 'https://dashboard.heroku.com/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'example',
    github: 'https://github.com/',
    heroku: 'https://dashboard.heroku.com/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
]


  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Work</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        
        {projects.map(project => 
          <Grid item>
            <Card title={project.title} github={project.github} heroku={project.heroku} image={project.image} ></Card>
            </Grid>
          )}
        </Grid>
    </>
  )
}

export default Work
