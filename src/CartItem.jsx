import { useDispatch, useSelector } from "react-redux";
import "./CartItem.css";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ onContinueShopping }) => {
	const cart = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	// Calculate total amount for all products in the cart
	const calculateTotalAmount = () => {
		let total = 0;
		cart.forEach((item) => {
			const cost = parseFloat(item.cost.replace("$", "")); // Remove the $ sign and convert to number
			total += cost * item.quantity;
		});
		return total.toFixed(2); // Return total amount formatted to 2 decimal places
	};

	const handleContinueShopping = (e) => {
		onContinueShopping(e);
	};

	const handleCheckoutShopping = (e) => {
		alert("Checkout functionality is not implemented yet.");
	};

	const handleIncrement = (item) => {
		dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
	};

	const handleDecrement = (item) => {
		if (item.quantity <= 1) {
			dispatch(removeItem(item.name));
		} else {
			dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
		}
	};

	const handleRemove = (item) => {
		dispatch(removeItem(item.name));
	};

	// Calculate total cost based on quantity for an item
	const calculateTotalCost = (item) => {
		let total = 0;
		const cost = parseFloat(item.cost.replace("$", "")); // Remove the $ sign and convert to number
		total = cost * item.quantity;
		return total.toFixed(2); // Return total cost formatted to 2 decimal places
	};

	return (
		<div className="cart-container">
			<h2 style={{ color: "black" }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
			<div>
				{cart.map((item) => (
					<div className="cart-item" key={item.name}>
						<img className="cart-item-image" src={item.image} alt={item.name} />
						<div className="cart-item-details">
							<div className="cart-item-name">{item.name}</div>
							<div className="cart-item-cost">{item.cost}</div>
							<div className="cart-item-quantity">
								<button
									className="cart-item-button cart-item-button-dec"
									onClick={() => handleDecrement(item)}
								>
									-
								</button>
								<span className="cart-item-quantity-value">{item.quantity}</span>
								<button
									className="cart-item-button cart-item-button-inc"
									onClick={() => handleIncrement(item)}
								>
									+
								</button>
							</div>
							<div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
							<button className="cart-item-delete" onClick={() => handleRemove(item)}>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
			<div style={{ marginTop: "20px", color: "black" }} className="total_cart_amount"></div>
			<div className="continue_shopping_btn">
				<button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
					Continue Shopping
				</button>
				<br />
				<button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
			</div>
		</div>
	);
};

export default CartItem;