import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';

const ProductsCard = (props) => {
    const { img, rating, title, description, discountPercentage, stock, brand, category, price } = props;

    const { addItem } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        const item = { ...props };
        addItem(item);
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

    // Check if price is defined before using it
    const formattedPrice = typeof price === 'number' ? price.toLocaleString() : 'Price not available';

    return (
        <>
            <div className="product_card">
                <figure>
                    <img src={img} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <p className="discount">Discount: {discountPercentage ? `${discountPercentage}%` : 'Discount not available'}</p>
                <p className="stock">Stock: {stock || 'Stock not available'}</p>
                <p className="brand">Brand: {brand}</p>
                <p className="category">Category: {category}</p>
                <p className="description">{description}</p>
                <h3 className="price">₹ {formattedPrice}</h3>
                <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;
