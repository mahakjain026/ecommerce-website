import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import {baseUrl} from '../../../config/index';

const ProductDetail = ({ product }: { product: any }) => {
  const router = useRouter();
  const { productId } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Name: {product.name}</h1>
      <p>Product ID: {productId}</p>
      <p>Product Description: {product.description}</p>
      {/* Add more product details here */}
    </div>
  );
};

// Generate static paths for dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch product IDs from your API or database
  const products = await fetch(`${baseUrl}/products`).then(res => res.json());

  const paths = products.map((product: any) => ({
    params: { productId: product.id.toString() },  // Assuming product ID is numeric
  }));

  return { paths, fallback: true };  // fallback: true for incremental static regeneration
};

// Fetch product data based on the ID
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await fetch(`${baseUrl}/products/${params?.productId}`).then(res => res.json());

  return {
    props: {
      product,
    },
    revalidate: 10,  // Revalidate the data every 10 seconds
  };
};

export default ProductDetail;
