import React, { useContext } from 'react';

const CartContext = React.createContext({
    items: []
});

export default CartContext;