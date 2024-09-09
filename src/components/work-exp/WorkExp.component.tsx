import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { BiLogoTypescript } from "react-icons/bi";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { workExp } from '../../assets/interfaces/WorkExperience';
import { FaAws, FaJava, FaJenkins } from "react-icons/fa";
import { Icon } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={workExp.avatar} alt="Banco de Bogotá" height="53"/>
          </Avatar>
        }
        title={workExp.company}
        subheader={workExp.time}
      />
      <CardMedia
        component="img"
        height="330"
        image={workExp.img}
        alt="Logo-Fiduciaria"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {workExp.possition}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        {
          workExp.techExp.map((tech, index)=>(
            <IconButton key = {index} aria-label={`tech-icon-${index}`}>
              <Icon/>
            </IconButton>
          ))
        }



        


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>{workExp.responsabilities}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
