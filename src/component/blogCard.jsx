import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function MultiActionAreaCard({ cards }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:250,
            borderRadius:2,
          }}
          image={cards.img}
          alt={cards.title}
        />
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h6" component="div"
          sx={{color:'#77829D',
            fontSize:16,
            textAlign:'start',
            fontFamily:'poppins'
          }}>
            {cards.title} | {cards.date}
          </Typography>
          <Typography variant="body2" sx={{ color: "#1B3C74",
            textAlign:'start',
            fontWeight:550,
            fontSize:16,
            fontFamily:'poppins'
           }}>
            {cards.news}
          </Typography>
        </CardContent>
      <CardActions>
        <CardMedia
          component="img"
          image={cards.thumbnail}
          sx={{width:30, height:30, borderRadius:'50%'}}
          alt="thumbnails"
        />
        <Typography 
        gutterBottom 
        variant="body2" 
        component="p"
        sx={{color:'#1B3C74',
          fontWeight:500,
          fontSize:16,
          fontFamily:'poppins'
        }}>
          {cards.name}
        </Typography>
      </CardActions>
    </Card>
  );
}
