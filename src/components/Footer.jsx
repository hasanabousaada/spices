import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3D251E] text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">
              بهارات الشرق
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              متجر متخصص بأجود أنواع البهارات الطبيعية والخلطات
              لإضافة نكهة مميزة لأطباقك اليومية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 cursor-pointer">
              روابط
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="cursor-pointer hover:text-white transition">
                <Link to="/">الرئيسية</Link>
              </li>

              <li className="cursor-pointer hover:text-white transition">
                <Link to="/shop">المتجر</Link>
              </li>

              <li className="cursor-pointer hover:text-white transition">
                <Link to="/recipes">الوصفات</Link>
              </li>

              <li className="cursor-pointer hover:text-white transition">
                <Link to="/about">من نحن</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 cursor-pointer">
              الفئات
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="cursor-pointer hover:text-white transition">
                بهارات مفردة
              </li>
              <li className="cursor-pointer hover:text-white transition">
                خلطات مميزة
              </li>
              <li className="cursor-pointer hover:text-white transition">
                أعشاب طبيعية
              </li>
              <li className="cursor-pointer hover:text-white transition">
                بهارات مشاوي
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 cursor-pointer">
              تواصل معنا
            </h3>

            <p className="text-gray-300 text-sm cursor-pointer hover:text-white transition">
              📧 hasnabousaada2000@gmail.com
            </p>

            <p className="text-gray-300 text-sm mt-2 cursor-pointer hover:text-white transition">
              📞 0994685227
            </p>

            <p className="text-gray-300 text-sm mt-2 cursor-pointer hover:text-white transition">
              📍 Syria - Al-Swaida
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm cursor-pointer hover:text-white transition">
          © 2026 بهارات الشرق - جميع الحقوق محفوظة
        </div>

      </div>
    </footer>
  );
};

export default Footer;