import React, { Fragment, useContext } from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CartContext from '../store/cart-context';
import { placeOrder } from '../lib/apis';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

const Cart = () => {

  const { cart, clearCart } = useContext(CartContext);
  const placeOrderMutation = useMutation(placeOrder);
  
  const placeOrderHandler = () => {
    placeOrderMutation.mutate(cart);
    toast.success('Order Placed Successfully', {
      position: 'top-left'
    })
    clearCart();
  }

  if (placeOrderMutation.isError) {
    return <p>Error in placing the order</p>
  }

  return (
    <Fragment>
      <Box sx={{ width: '360px', margin:'5px auto', mt: 5}}>
        <Typography variant='h5' component="h1">My Cart</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
              cart.map((item) => {
                return (
                  <Fragment key={item.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          primary={`${item.foodName} x ${item.qty}`} 
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                              </Typography>
                              Rs. {item.price} 
                            </React.Fragment>
                          }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
                )
              })
          }
        </List>
        <Typography variant='h6' component="h6"> Total : Rs. { cart.reduce((total, item)=> total + item.price * item.qty, 0) }</Typography>
        <Button variant="outlined" size="small" onClick={placeOrderHandler}>Place Order</Button>
     </Box>
    </Fragment>
  )
}

export default Cart;