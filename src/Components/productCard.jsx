import * as React from 'react';
import "./ProductCard.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Shoes from "../images/Shoes.jpg"
import TransitionsModal from './Popper';


export default function ProductCard({Data}) {
  console.log(Data);
  return (
    <Card 
    className='Product-cards'
    style={{
        margin:"1vw",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
    }}
        sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Shoes}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {Data.description
}        </Typography>
      </CardContent>
      <CardActions>
        <TransitionsModal Data={Data}/>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}