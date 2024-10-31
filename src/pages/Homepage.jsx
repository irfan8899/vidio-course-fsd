import HeroImage from "../assets/images/hero.svg";
import aboutImage from "../assets/images/about.svg";

import proyek1 from "../assets/images/proyek-1.webp";
import proyek2 from "../assets/images/proyek-2.webp";
import proyek3 from "../assets/images/proyek-3.webp";
import proyek4 from "../assets/images/proyek-4.webp";
import proyek5 from "../assets/images/proyek-5.webp";

const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="hero grid lg:grid-cols-2 grid-cols-1 items-center gap-12 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl text-3xl font-medium mb-7">
              Dapat Kerja Lebih Cepat Walau Pindah Jalur Karir.{" "}
              <span className="font-bold text-sky-400 underline">
                Tanpa kuliah
              </span>
            </h1>
            <p className="text-base mb-7">
              Mission-Based Learning didesain agar kamu gak males belajar & bisa
              lebih cepat dapat kerja. Dalam 2,5 Tahun harisenin.com telah
              membantu 5117* alumni meraih karir impiannya lebih cepat.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* About Section */}
        <div
          className="about grid lg:grid-cols-2 grid-cols-1 items-center gap-12 md:pt-20 pt-32"
          id="about"
        >
          <div className="box">
            <img
              src={aboutImage}
              alt="About"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
          <div className="box">
            <h1 className="lg:text-5xl text-3xl font-medium mb-7">
              Mengapa memilih{" "}
              <span className="font-bold text-sky-300 underline">
                Codingin.
              </span>
            </h1>
            <p className="text-base">
              Codingin adalah platform belajar yang interaktif dan praktis.
              Dengan materi dari para ahli, kami membantumu menguasai skill
              digital, dari pemula hingga profesional. Siap berkembang dan
              sukses di dunia teknologi bersama Codingin?
            </p>
          </div>
        </div>

        {/* Service Section */}
        <div className="services pt-32" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Layanan
          </h1>
          <p className="text-center">
            Kami menawarkan layanan profesional yang dirancang untuk memenuhi
            kebutuhan Anda. Dengan tim ahli, kami berkomitmen memberikan
            pengalaman terbaik dan solusi yang efektif.
          </p>

          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Layanan Pengembangan Diri
              </h3>
              <p className="text-white text-base/loose">
                Kami menawarkan pendekatan khusus untuk mendukung pengembangan
                diri Anda. Dengan layanan ini, Anda akan mendapatkan bimbingan
                yang sesuai dengan kebutuhan dan aspirasi pribadi Anda.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Layanan Loyalitas
              </h3>
              <p className="text-white text-base/loose">
                Kami berkomitmen untuk membangun hubungan jangka panjang dengan
                pelanggan. Layanan ini dirancang untuk memberikan nilai lebih
                dan penghargaan bagi kesetiaan Anda.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Layanan Kesehatan Mental
              </h3>
              <p className="text-white text-base/loose">
                Kami peduli akan kesehatan mental Anda. Melalui layanan ini,
                kami menyediakan dukungan dan sumber daya yang diperlukan untuk
                membantu Anda menjaga keseimbangan emosional dan mental yang
                sehat.
              </p>
            </div>
          </div>
        </div>

        {/* Course Section */}
        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Kursus
          </h1>
          <p className="text-center">
            Kami menawarkan kursus berkualitas untuk mengembangkan keterampilan
            dan pengetahuan Anda. Bergabunglah dan tingkatkan kemampuan
            profesional Anda!
          </p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek1}
                alt="proyek image"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">UI/UX</h3>
              <p className="text-base/loose">
                Kami menciptakan desain UI/UX yang intuitif dan menarik,
                menjamin pengalaman pengguna yang optimal dan fungsional.
              </p>
              <a
                href="#"
                className="inline-block bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full mt-4"
              >
                Beli
              </a>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek2}
                alt="proyek image"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                FRONT END DEVELOPER
              </h3>
              <p className="text-base/loose">
                Kuasai keterampilan pengembangan web dengan kursus Front End
                Developer kami, yang mencakup HTML, CSS, dan JavaScript
              </p>
              <a
                href="#"
                className="inline-block bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full mt-4"
              >
                Beli
              </a>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek3}
                alt="proyek image"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                BACK END DEVELOPER
              </h3>
              <p className="text-base/loose">
                Pelajari cara membangun dan mengelola server, serta database
                yang kuat untuk mendukung aplikasi web Anda
              </p>
              <a
                href="#"
                className="inline-block bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full mt-4"
              >
                Beli
              </a>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek4}
                alt="proyek image"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                FULL STACK DEVELOPER
              </h3>
              <p className="text-base/loose">
                Dengan kursus Full Stack Developer kami, Anda akan mempelajari
                semua aspek pengembangan web, mulai dari front end hingga back
                end.
              </p>
              <a
                href="#"
                className="inline-block bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full mt-4"
              >
                Beli
              </a>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={proyek5}
                alt="proyek image"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                DATA SCIENTIST
              </h3>
              <p className="text-base/loose">
                Pelajari cara menganalisis dan menginterpretasikan data untuk
                mengambil keputusan yang lebih baik dalam bisnis dengan kursus
                Data Scientist kami.
              </p>
              <a
                href="#"
                className="inline-block bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full mt-4"
              >
                Beli
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
