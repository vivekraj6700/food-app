import React,{useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartContext from '../../store/cart-context';

const Food = ({id,  name, price, desc, imageUrl }) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addToCart({ id: id, price: price, foodName: name, qty: 1 });
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 240 }}
      image={imageUrl}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        $ {price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Buy Now</Button>
      <Button size="small" onClick={addToCartHandler}>Add To Cart</Button>
    </CardActions>
  </Card>
  )
}

export default Food;

