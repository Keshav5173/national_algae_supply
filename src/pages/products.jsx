import { useNavigate } from "react-router-dom";
import ProductCardComponent from "../components/productCardComponent.jsx";
import { products } from "../products/products.js";

function Products() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full w-full flex-wrap items-center justify-center gap-10 bg-[#E3EEE5] p-10">
      {products.map((p) => (
        <ProductCardComponent
          key={p.slug}
          name={p.name}
          price={p.price}
          images={p.images}
          onBuy={() => navigate(`/product/${p.slug}`)}
        />
      ))}
    </div>
  );
}

export default Products;