"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "TENTANG KAMI",
              subtitle: "Bengkel Las Berkah Amanah",
              description: `Bengkel las profesional yang melayani berbagai kebutuhan
              konstruksi besi dan logam, dikerjakan oleh tukang las berpengalaman
              dengan hasil rapi, kuat, dan tepat waktu.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 flex flex-col items-center gap-8 lg:mt-15 lg:flex-row lg:gap-16 xl:mt-20 xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative aspect-[588/526.5] w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/2"
            >
              <Image
                src="/images/about/about-las-01.webp"
                alt="Bengkel Las Berkah Amanah"
                className="object-cover"
                fill
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full lg:w-1/2"
            >
              <h3 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                Kenapa Memilih Kami
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Kami melayani berbagai kebutuhan konstruksi besi dan logam,
                mulai dari pagar, kanopi, teralis, tangga, hingga konstruksi
                bangunan skala besar. Setiap pekerjaan dikerjakan dengan
                teliti agar hasilnya kuat, rapi, dan sesuai kesepakatan waktu.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div>
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Pengalaman Bertahun-tahun
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Sudah menangani ratusan proyek pengelasan, dari rumah
                    tinggal hingga bangunan komersial.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-5">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div>
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Material dan Pengerjaan Berkualitas
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Menggunakan bahan besi dan baja pilihan dengan teknik
                    pengelasan yang kuat dan tahan lama.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
      <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16 xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left order-2 w-full lg:order-1 lg:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Layanan Lengkap Untuk Kebutuhan Anda
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Solusi Pengelasan Dari A sampai Z
              </h2>
              <p className="text-body-color dark:text-body-color-dark">
                Kami melayani pembuatan pagar besi, kanopi, teralis jendela,
                railing tangga, kanopi carport, hingga konstruksi baja untuk
                bangunan. Konsultasi desain gratis dan pengerjaan sesuai
                kesepakatan waktu.
              </p>
              <div>
                <a
                  href="/#contact"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Konsultasi Sekarang
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative order-1 aspect-[588/526.5] w-full overflow-hidden rounded-2xl shadow-lg lg:order-2 lg:w-1/2"
            >
              <Image
                src="/images/about/about-las-02.webp"
                alt="Layanan Las Berkah Amanah"
                className="object-cover"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
