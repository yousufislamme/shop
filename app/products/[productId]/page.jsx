import Header from "@/components/Header";

const SingleProduct = ({ params }) => {
  return (
    <>
      <Header />
      SingleProduct {params.productId}
    </>
  );
};

export default SingleProduct;
