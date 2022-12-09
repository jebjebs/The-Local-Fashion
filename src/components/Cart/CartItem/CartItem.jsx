import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

import useStyles from './styles';
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body1">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity} </Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                {/* <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button> */}
                <IconButton color="secondary" onClick={() => onRemoveFromCart(item.id)}>
                    <DeleteOutline />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CartItem