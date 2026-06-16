const About = () => {
  return (
    <section className="py-16 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D251E]">
            من نحن
          </h1>

          <p className="text-gray-600 mt-3">
            قصة شغفنا بالبهارات والنكهات الشرقية
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div>
            <img
              src="./src/assets/images/mix.png"
              alt="about spices"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-right">

            <p className="text-gray-700 leading-8">
              نحن متجر متخصص في تقديم أجود أنواع البهارات الطبيعية
              المستوردة والمحلية، مع خلطات خاصة تعكس أصالة المطبخ الشرقي.
            </p>

            <p className="text-gray-700 leading-8">
              نؤمن أن الطعم الحقيقي يبدأ من البهار، لذلك نختار منتجاتنا
              بعناية لنضمن جودة عالية ونكهة مميزة لكل طبق.
            </p>

            <p className="text-gray-700 leading-8">
              هدفنا هو أن نجعل الطبخ تجربة ممتعة وغنية بالنكهات الأصيلة
              التي تأخذك في رحلة إلى قلب الشرق.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">

              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#B85C38]">50+</h3>
                <p className="text-sm text-gray-600">نوع بهار</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#B85C38]">1000+</h3>
                <p className="text-sm text-gray-600">عميل سعيد</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#B85C38]">5 سنوات</h3>
                <p className="text-sm text-gray-600">خبرة</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;