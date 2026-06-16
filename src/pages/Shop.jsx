import products from "../data/products";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#3D251E] mb-8">
        المتجر
      </h1>

      {/* Search + Filter (UI only) */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">

        <input
          type="text"
          placeholder="ابحث عن منتج..."
          className="border p-3 rounded-lg w-full"
        />

        <select className="border p-3 rounded-lg w-full md:w-64">
          <option>كل الفئات</option>
          <option>بهارات مفردة</option>
          <option>خلطات</option>
          <option>أعشاب</option>
        </select>

      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="text-lg font-semibold text-[#3D251E]">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {product.category}
              </p>

              <p className="text-[#B85C38] font-bold mt-2">
                ${product.price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="inline-block mt-4 bg-[#B85C38] text-white px-4 py-2 rounded-lg hover:bg-[#9C4A2B] transition"
              >
                عرض المنتج
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Shop;