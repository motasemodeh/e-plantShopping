import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      const price = parseFloat(item.cost.substring(1));
      total += price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ 
      name: item.name, 
      quantity: item.quantity + 1 
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ 
        name: item.name, 
        quantity: item.quantity - 1 
      }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cartItems.length === 0 ? (
                    <div className="empty-cart-message">Your cart is empty</div>
                ) : (
                    cartItems.map(item => (
                        <div className="cart-item" key={item.name}>
                            {/* ... your existing cart item rendering ... */}
                            <div className="cart-item-quantity">
                                <button 
                                    className="cart-item-button cart-item-button-dec" 
                                    onClick={() => dispatch(updateQuantity({ 
                                        name: item.name, 
                                        quantity: item.quantity - 1 
                                    }))}
                                >
                                    -
                                </button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button 
                                    className="cart-item-button cart-item-button-inc" 
                                    onClick={() => dispatch(updateQuantity({ 
                                        name: item.name, 
                                        quantity: item.quantity + 1 
                                    }))}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                className="cart-item-delete" 
                                onClick={() => dispatch(removeItem(item.name))}
                            >
                                Delete
                            </button>
                        </div>
          ))
        )}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button 
          className="get-started-button" 
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <br />
        <button 
          className="get-started-button1" 
          onClick={(e) => handleCheckoutShopping(e)}
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;