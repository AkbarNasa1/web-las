"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const targetPhoneNumber = "6281563996642";
const defaultMessage = encodeURIComponent(
  "Halo Bengkel Las Berkah Amanah, saya ingin berkonsultasi mengenai layanan las."
);
const waLink = `https://wa.me/${targetPhoneNumber}?text=${defaultMessage}`;

const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "500+", label: "Proyek Selesai" },
  { value: "100%", label: "Garansi Pengerjaan" },
];

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden pb-20 pt-28 md:pt-32 xl:pb-25 xl:pt-36">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        
        {/* Row 1: Teks di Kiri & Gambar di Kanan */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Left Column (Judul, Deskripsi, Tombol) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-black dark:text-white sm:text-5xl lg:text-[3.5rem]">
              Solusi Las{" "}
              <span className="relative inline-block before:absolute before:bottom-1.5 before:left-0 before:-z-1 before:h-3.5 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Terpercaya
              </span>{" "}
              untuk Setiap Kebutuhan Anda
            </h1>

            <p className="max-w-[500px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Kami mengerjakan pagar besi, kanopi, teralis, railing tangga,
              hingga konstruksi baja untuk bangunan. Dikerjakan tukang las
              berpengalaman, hasil rapi, kuat, dan tepat waktu — dengan
              konsultasi desain gratis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-black px-7.5 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Konsultasi Via WhatsApp
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </a>

              <a
                href="/#features"
                className="flex items-center gap-2 rounded-full border border-stroke px-7.5 py-3 font-medium text-black duration-300 ease-in-out hover:border-primary hover:text-primary dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
              >
                Lihat Layanan
              </a>
            </div>
          </motion.div>

          {/* Right Column (Gambar Hero) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-6 -z-1 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-meta/20 blur-2xl" />

              <div className="relative aspect-[700/560] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 shadow-solid-l">
                <Image
                  src="/images/hero/las-hero-01.webp"
                  alt="Tukang las sedang bekerja di Bengkel Las Berkah Amanah"
                  className="object-cover"
                  fill
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-solid-l dark:bg-blacksection sm:flex">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-meta/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-meta">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Garansi Pengerjaan</p>
                  <p className="text-xs text-body-color dark:text-body-color-dark">Hasil kuat &amp; rapi terjamin</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Statistik (Akan berada di bawah gambar di Mobile, dan tetap di bawah di Desktop) */}
        <div className="mt-12 flex flex-wrap gap-8 border-t border-stroke pt-7.5 dark:border-strokedark sm:gap-10 lg:w-1/2">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold text-black dark:text-white">
                {stat.value}
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;