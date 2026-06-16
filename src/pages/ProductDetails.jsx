import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  // نجيب المنتج حسب id
  const product = products.find((p) => p.id === Number(id));

  // إذا المنتج مو موجود
  if (!product) {
    return (
      <div className="p-10 text-center">
        المنتج غير موجود
        <div className="mt-4">
          <Link to="/shop" className="text-blue-600">
            الرجوع للمتجر
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Info */}
        <div>

          <h1 className="text-4xl font-bold text-[#3D251E]">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {product.category}
          </p>

          <p className="text-2xl text-[#B85C38] font-bold mt-4">
            ${product.price}
          </p>

          <p className="text-gray-700 mt-6 leading-8">
            {product.description}
          </p>

          {/* Button */}
          <button className="mt-8 bg-[#B85C38] text-white px-6 py-3 rounded-lg hover:bg-[#9C4A2B] transition">
            إضافة إلى السلة
          </button>

          <div className="mt-6">
            <Link to="/shop" className="text-sm text-gray-600">
              ← العودة للمتجر
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;