import { Link } from "react-router-dom";
import recipes from "../data/recipes";

const Recipes = () => {
  return (
    <section className="py-16 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D251E]">
            وصفاتنا
          </h1>

          <p className="text-gray-600 mt-3">
            اكتشف وصفات شهية باستخدام أفضل البهارات
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#3D251E]">
                  {recipe.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {recipe.description}
                </p>

                <Link
                  to="/shop"
                  className="inline-block mt-4 text-sm bg-[#B85C38] text-white px-4 py-2 rounded-lg hover:bg-[#9C4A2B] transition"
                >
                  تسوق البهارات
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Recipes;