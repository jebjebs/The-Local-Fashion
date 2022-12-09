import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';



const Review = ({ checkoutToken }) => {
    
  return (
    <>
        
        <Typography variant="h6" gutterBottom>Order Summary</Typography>
        <List disablePadding>
            {/* loop through products in cart */}
            {/* {checkoutToken.live.line_items.map((product) => ( */}
            {checkoutToken.line_items.map((product) => (
                 <ListItem style={{ padding: '10p 0x' }} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                    <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                 </ListItem>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                    {/* {checkoutToken.live.subtotal.formatted_with_symbol} */}
                    {checkoutToken.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
    </>
  )
}

export default Review