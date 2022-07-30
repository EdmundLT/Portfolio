import * as React from 'react';
import Card from '@mui/material/Card';
import FadeIn from "react-fade-in/lib/FadeIn";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import{AiFillGithub} from 'react-icons/ai'
export default function ProjectCard(props) {
  return (
    <div className="shadow-xl rounded-xl">
    <FadeIn
    transitionDuration={1000}
    delay={750}
    >
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="pj img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<AiFillGithub />} href={props.repo}>Repo</Button>
        {props.livedemo && (<Button size="small" href={props.livedemo}>Live Demo</Button>)}
        
        
      </CardActions>
    </Card>
    </FadeIn>
    </div>
  );
}
