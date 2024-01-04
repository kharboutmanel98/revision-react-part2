import PropTypes from "prop-types";

const Product = ({ children, onDeleteProduct, id }) => {
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-info mb-3">{children}</div>
        <button onClick={() => onDeleteProduct(id)} className="btn btn-light">Delete</button>
      </div>
    </>
  );
};

//validation prop types
Product.propTypes = {
  price: PropTypes.number.isRequired,
  label: PropTypes.string,
};

Product.defaultProps = {
  price: 0,
  label: "My Product",
};
export default Product;
