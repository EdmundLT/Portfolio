import * as React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { about } from "../../data/config";
export default function ProjectCard(props) {
  return (
    <div className="text-black shadow-xl rounded-lg p-2">
      <FadeIn transitionDuration={1000} delay={750}>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src={about.me} alt="me" />
            </div>
          </div>
          <div className="chat-header">
            {props.title}
            <time className="pl-2 text-xs opacity-50">{props.createdAt}</time>
          </div>
          <div className="chat-bubble chat-bubble-info text-left">
            {props.description}
          </div>
        </div>
        {/* Right */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src={about.me} alt="me" />
            </div>
          </div>
          <div className="chat-header">Interviewer</div>
          <div className="chat-bubble chat-bubble-success">
            How is it look like?
          </div>
          <div className="chat-footer opacity-50">Seen at 09:21</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src={about.me} alt="me" />
            </div>
          </div>
          <div className="chat-header">
            Edmund Tang
            <time className="pl-2 text-xs opacity-50">Just now</time>
          </div>
          <div className="chat-bubble chat-bubble-info">
            <div className="w-30 m-2">
              <img className="rounded-lg" src={props.img} alt="me" />
            </div>
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src={about.me} alt="me" />
            </div>
          </div>
          <div className="chat-header">
            Edmund Tang
            <time className="pl-2 text-xs opacity-50">Just now</time>
          </div>
          <div className="chat-bubble chat-bubble-info">
            <a href={props.livedemo}>
              <p className="underline underline-offset-1">Check it here!</p>
            </a>
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src={about.me} alt="me" />
            </div>
          </div>
          <div className="chat-header">
            Edmund Tang
            <time className="pl-2 text-xs opacity-50">Just now</time>
          </div>
          <div className="chat-bubble chat-bubble-info">
            <a href={props.repo}>
              <p className="underline underline-offset-1">
                And here is the repo!
              </p>
            </a>
          </div>
        </div>

        {/* <Card sx={{ maxWidth: 500 }}>
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
    </Card> */}
      </FadeIn>
    </div>
  );
}
