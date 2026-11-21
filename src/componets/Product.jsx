function Product({ item }) {
  return (
    <div className="product-card">
      <img src={item.img} alt={item.name} />

      <h2>Name:{item.name}</h2>
      <p>Category: {item.category}</p>
      <h3>Price: ₹{item.price}</h3>
      <p>Size: {item.description}</p>

    </div>
  );
}

export default Product;