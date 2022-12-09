import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import { Products, Navbar, Cart, Checkout } from './components';

// changes primary and secondary color of Material-UI
const theme = createTheme({
  palette: {
    primary: {
      // light: '#757ce8',
      main: '#E3BC9A',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: '#9ac1e3',
      // dark: '#ba000d',
      // contrastText: '#000',
    },
  }
  
});


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    // const { cart } = await commerce.cart.update(productId, { quantity });

    // setCart(cart)
    setCart(await commerce.cart.update(productId, { quantity }))
  }

  const handleRemoveFromCart = async (productId) => {
    // const { cart } = await commerce.cart.remove(productId);

    // setCart(cart)
    setCart(await commerce.cart.remove(productId))
  }

  const handleEmptyCart = async () => {
    // const { cart } = await commerce.cart.empty();

    // setCart(cart);
    setCart(await commerce.cart.empty());
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  } 

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // if (!cart.line_items) return "Loading..."

  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart 
              cart={cart} 
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
      </div>
    </Router>
    </MuiThemeProvider>
  )
}

export default App