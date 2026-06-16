const Contact = () => {
  return (
    <section className="py-16 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D251E]">
            تواصل معنا
          </h1>

          <p className="text-gray-600 mt-3">
            نحن هنا للإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-[#3D251E] mb-2">📍 الموقع</h3>
              <p className="text-gray-600">سوريا - السويداء</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-[#3D251E] mb-2">📞 الهاتف</h3>
              <p className="text-gray-600">0994685227</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-[#3D251E] mb-2">📧 الإيميل</h3>
              <p className="text-gray-600">hasnabousaada2000@gmail.com</p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="الاسم"
                className="w-full p-3 border rounded-lg outline-none focus:border-[#B85C38]"
              />

              <input
                type="email"
                placeholder="الإيميل"
                className="w-full p-3 border rounded-lg outline-none focus:border-[#B85C38]"
              />

              <input
                type="text"
                placeholder="الموضوع"
                className="w-full p-3 border rounded-lg outline-none focus:border-[#B85C38]"
              />

              <textarea
                rows="5"
                placeholder="رسالتك"
                className="w-full p-3 border rounded-lg outline-none focus:border-[#B85C38]"
              ></textarea>

              <button
                type="button"
                className="w-full bg-[#B85C38] text-white py-3 rounded-lg hover:bg-[#9C4A2B] transition cursor-pointer"
              >
                إرسال الرسالة
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;