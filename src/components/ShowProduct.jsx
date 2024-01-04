import { useParams, useNavigate } from "react-router-dom";

const ShowProduct = () => {
  // const {id, slug} = useParams()
  const myParams = useParams();
  console.log(myParams);

  const navigate = useNavigate();
  if (+myParams.id === 404) {
    return <h1>Page Not Found</h1>;
  }

  const redirectToHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Hello Im Product</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        rem!
      </p>
      <button className="btn btn-danger" onClick={redirectToHome}>
        Redirect
      </button>
    </>
  );
};

export default ShowProduct;
