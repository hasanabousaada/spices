
import products from "../data/products";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <section className="bg-[#F8F5EF] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[85vh]">

          {/* Content */}
          <div className="text-center lg:text-right">

            <h1
              className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-[#3D251E]
              "
            >
              اكتشف نكهات الشرق
              <br />
              بأجود أنواع البهارات
            </h1>

            <p
              className="
              mt-6
              text-gray-600
              text-lg
              leading-8
              max-w-xl
              mx-auto
              lg:mx-0
              "
            >
              مجموعة مختارة من البهارات الطبيعية والخلطات
              الشرقية المميزة التي تضيف نكهة لا تُنسى
              إلى أطباقك اليومية.
            </p>

            <div className="mt-8">

              <Link
                to="/shop"
                className="
                inline-block
                bg-[#B85C38]
                text-white
                px-8
                py-4
                rounded-lg
                hover:bg-[#9C4A2B]
                transition
                "
              >
                تسوق الآن
              </Link>

            </div>

          </div>

          {/* Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
              alt="بهارات"
              className="
              w-full
              rounded-2xl
              shadow-xl
              object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
    
    {/* Categories Section */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-12">

      <h2 className="text-3xl font-bold text-[#3D251E]">
        تسوق حسب الفئة
      </h2>

      <p className="text-gray-500 mt-3">
        اختر من مجموعتنا المتنوعة من البهارات والخلطات والأعشاب
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div
        className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:-translate-y-2
        hover:shadow-xl
        transition
        duration-300
        cursor-pointer
        "
      >
        <img
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757"
          alt="بهارات مفردة"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">

          <h3 className="text-xl font-semibold text-[#3D251E]">
            بهارات مفردة
          </h3>

          <p className="text-gray-600 mt-2">
            فلفل أسود، كمون، كركم، بابريكا وأكثر.
          </p>

        </div>
      </div>

      {/* Card 2 */}
      <div
        className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:-translate-y-2
        hover:shadow-xl
        transition
        duration-300
        cursor-pointer
        "
      >
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
          alt="خلطات"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">

          <h3 className="text-xl font-semibold text-[#3D251E]">
            خلطات مميزة
          </h3>

          <p className="text-gray-600 mt-2">
            خلطات جاهزة للأرز والمشاوي والأطباق الشرقية.
          </p>

        </div>
      </div>

      {/* Card 3 */}
      <div
        className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:-translate-y-2
        hover:shadow-xl
        transition
        duration-300
        cursor-pointer
        "
      >
        <img
          src="https://images.unsplash.com/photo-1514996937319-344454492b37"
          alt="أعشاب"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">

          <h3 className="text-xl font-semibold text-[#3D251E]">
            أعشاب طبيعية
          </h3>

          <p className="text-gray-600 mt-2">
            نعناع، زعتر، إكليل الجبل وأعشاب متنوعة.
          </p>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Featured Products */}
<section className="py-20 bg-[#F8F5EF]">
  <div className="max-w-7xl mx-auto px-4">

    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#3D251E]">
        المنتجات المميزة
      </h2>

      <p className="text-gray-600 mt-3">
        أفضل البهارات المختارة بعناية لك
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.slice(0, 4).map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >

          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
          />

          {/* Content */}
          <div className="p-4">

            <h3 className="text-lg font-semibold text-[#3D251E]">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {product.category}
            </p>

            <p className="text-[#B85C38] font-bold mt-2">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-4 text-sm bg-[#B85C38] text-white px-4 py-2 rounded-lg hover:bg-[#9C4A2B] transition"
            >
              عرض المنتج
            </Link>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>


    </>
  );
};

export default Home;