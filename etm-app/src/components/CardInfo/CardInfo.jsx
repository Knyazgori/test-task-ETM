import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardInfo({ id, title, vendor, pack, price }) {
  return (
    <Card sx={{ width: 400, marginBottom: 10 }}>
      <CardMedia
        component="img"
        alt="some_img"
        height="600"
        image="/item.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vendor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pack}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          цена: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/catalog/${id}`}><Button size="small">Страница товара</Button></Link> 
      </CardActions>
    </Card>
  );
}
