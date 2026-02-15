"use client";

import { useState } from "react";
import { Globe, Cpu, Server, Box, Gamepad2, User } from "lucide-react";
import ExpertiseClickable from "./components/ExpertiseClickable";
import { useContactModal } from "./ContactModalContext";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function Home() {
  const { setIsContactModalOpen } = useContactModal();
  const { language } = useLanguage();
  const t = translations[language];

  const [showMore, setShowMore] = useState(false);

  const getSystemAutoDescription = () => {
    if (language === "ID") {
      return `
      ${t.systemAutoIntro}
      <br><br>
      <article>
        <b>${t.eCareName}</b>
        <p>${t.eCareDesc}</p>
      </article>
      <br>
      <article>
        <b>${t.cashInsuranceName}</b>
        <p>${t.cashInsuranceDesc}</p>
      </article>
      <br>
      <article>
        <b>${t.slaMonitoringName}</b>
        <p>${t.slaMonitoringDesc}</p>
      </article>
      <br>
      <article>
        <b>${t.bankInsuranceName}</b>
        <p>${t.bankInsuranceDesc}</p>
      </article>
      <br><br>
      ${t.confidentialityNote}
      `;
    } else {
      return `
      ${t.systemAutoIntro}
      <br><br>
      <article>
        <b>${t.eCareName}</b>
        <p>${t.eCareDesc}</p>
      </article>
      <br>
      <article>
        <b>${t.cashInsuranceName}</b>
        <p>${t.cashInsuranceDesc}</p>
      </article>
      <br>
      <article>
        <b>${t.slaMonitoringName}</b>
        <p>${t.slaMonitoringDesc}</p>
      </article>
      <br>
      <article>
        <b>${t.bankInsuranceName}</b>
        <p>${t.bankInsuranceDesc}</p>
      </article>
      <br><br>
      ${t.confidentialityNote}
      `;
    }
  };

  return (
    <main className="pt-20">
      {/* Hero / Banner */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
        id="about"
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            {t.heroMain}
            <span className="text-teal-600"> {t.heroMain2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-black/70">
            {t.heroDesc}
          </p>

          <div className="mt-10">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center
                        rounded-md bg-teal-600 px-8 py-4
                        text-sm font-semibold text-white
                        hover:bg-teal-700 transition"
            >
              {t.heroBtn}
            </button>
          </div>

        </div>
      </section>

      {/* Expertise Section */}
      <section id="projects" className="w-full bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24">

          {/* Section Header */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              {t.expertiseTitle}
            </h2>
            <p className="mt-4 text-black/70">
              {t.expertiseDesc}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <ExpertiseClickable
              title={t.webDevTitle}
              year={'2023 - 2026'}
              // link="https://example.com"
              description={t.webDevLongDesc}
              className="p-8 rounded-lg border border-black/10 hover:border-teal-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <Globe className="w-8 h-8 text-teal-600" />

              <h3 className="mt-6 text-lg font-semibold text-black">
                {t.webDevTitle}
              </h3>

              <p className="mt-4 text-sm text-black/70">
                {t.webDevDesc}
              </p>
            </ExpertiseClickable>

            {/* Card 2 */}
            <ExpertiseClickable
              title={t.systemAutoTitle}
              year={'2023-2026'}
              links={[]}
              description={getSystemAutoDescription()}
              className="p-8 rounded-lg border border-black/10 hover:border-teal-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <Cpu className="w-8 h-8 text-teal-600" />

              <h3 className="mt-6 text-lg font-semibold text-black">
                {t.systemAutoTitle}
              </h3>

              <p className="mt-4 text-sm text-black/70">
                {t.systemAutoDesc}
              </p>
            </ExpertiseClickable>



            {/* Card 6 */}
            <ExpertiseClickable
              title={t.itSupportTitle}
              year={'2024-2026'}
              links={[{ label: "CMSP Login Page", url: "https://cmsp.bankkalsel.co.id/login" }]}
              description={t.itSupportLongDesc}
              className="p-8 rounded-lg border border-black/10 hover:border-teal-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <User className="w-8 h-8 text-teal-600" />

              <h3 className="mt-6 text-lg font-semibold text-black">
                {t.itSupportTitle}
              </h3>

              <p className="mt-4 text-sm text-black/70">
                {t.itSupportDesc}
              </p>
            </ExpertiseClickable>

          </div>

          {/* See More Section (moved cards) */}
          <div className="mt-8">
            <div className="flex justify-center">
              <button
              onClick={() => setShowMore(prev => !prev)}
              className="inline-flex items-center justify-center
                rounded-md bg-teal-600 px-6 py-3
                text-sm font-semibold text-white
                hover:bg-teal-700 transition-all duration-300
                shadow-sm hover:shadow-md"
              >
              {showMore ? 'See less' : 'See more'}
              </button>
            </div>

            {showMore && (
              <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                            {/* Card 3 */}
            <ExpertiseClickable
              title={t.itInfraTitle}
              year={'2023'}
              description={t.itInfraLongDesc}
              className="p-8 rounded-lg border border-black/10 hover:border-teal-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <Server className="w-8 h-8 text-teal-600" />

              <h3 className="mt-6 text-lg font-semibold text-black">
                {t.itInfraTitle}
              </h3>

              <p className="mt-4 text-sm text-black/70">
                {t.itInfraDesc}
              </p>
            </ExpertiseClickable>


                {/* Card 4 */}
                <ExpertiseClickable
                  title={t.modelingTitle}
                  year={'2019-2026'}
                  links={[{ label: "Shutterstock Portfolio", url: "https://www.shutterstock.com/g/John+Assets?rid=474086059" }]}
                  description={t.modelingLongDesc}
                  className="p-8 rounded-lg border border-black/10 hover:border-teal-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <Box className="w-8 h-8 text-teal-600" />

                  <h3 className="mt-6 text-lg font-semibold text-black">
                    {t.modelingTitle}
                  </h3>

                  <p className="mt-4 text-sm text-black/70">
                    {t.modelingDesc}
                  </p>
                </ExpertiseClickable>

                {/* Card 5 */}
                <ExpertiseClickable
                  title={t.gameDevTitle}
                  year={'2023-2026'}
                  links={[
                    { label: "Cure Runner 2019", url: "https://youtu.be/RPBW5za9z6A?si=Wpk5t4qlBnuMD7UE" },
                    { label: "Oto's Advent 2022", url: "https://youtu.be/UPXBocXboTY?si=WkczEOjfoythZsMC" },
                    { label: "Sign Adventure 2023", url: "https://youtu.be/0l3k86bQ50I?si=ZLC0cFqM_q48F_el" }
                  ]}
                  description={t.gameDevLongDesc}
                  className="p-8 rounded-lg border border-black/10 hover:border-teal-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <Gamepad2 className="w-8 h-8 text-teal-600" />

                  <h3 className="mt-6 text-lg font-semibold text-black">
                    {t.gameDevTitle}
                  </h3>

                  <p className="mt-4 text-sm text-black/70">
                    {t.gameDevDesc}
                  </p>
                </ExpertiseClickable>

              </div>
            )}
          </div>

          {/* Experience Highlight */}
          <div className="mt-24">

            <div className="max-w-7xl bg-white rounded-2xl p-10 shadow-lg 
                            border border-white/20 
                            hover:shadow-2xl transition-all duration-500">

              <span className="text-sm font-semibold text-teal-600 tracking-wider uppercase">
                {t.profExpLabel}
              </span>

              <h3 className="mt-4 text-3xl font-bold text-black">
                {t.profExpTitle}
              </h3>

              <p className="mt-6 text-black/70 leading-relaxed">
                {t.profExpDesc}
              </p>

              {/* Achievement Grid */}
              <div className="mt-8 grid sm:grid-cols-3 gap-6">

                <div>
                  <p className="text-2xl font-bold text-teal-600">{t.profExpYear}</p>
                  <p className="text-sm text-black/60 mt-1">
                    {t.profExpYearDesc}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-teal-600">{t.profExpMulti}</p>
                  <p className="text-sm text-black/60 mt-1">
                    {t.profExpMultiDesc}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-teal-600">{t.profExpWeb}</p>
                  <p className="text-sm text-black/60 mt-1">
                    {t.profExpWebDesc}
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Education Section */}
          <div className="mt-24">

            <div className="max-w-7xl bg-white rounded-2xl p-10 shadow-lg 
                            border border-white/20 
                            hover:shadow-2xl transition-all duration-500">

              <span className="text-sm font-semibold text-teal-600 tracking-wider uppercase">
                {t.educationLabel}
              </span>

              <h3 className="mt-4 text-3xl font-bold text-black">
                {t.educationTitle}
              </h3>

              <p className="mt-2 text-black/60">
                {t.educationSchool}
              </p>

              <p className="mt-6 text-black/70 leading-relaxed">
                {t.educationDesc}
              </p>

              {/* Academic Highlights */}
              <div className="mt-8 grid sm:grid-cols-3 gap-6">

                <div>
                  <p className="text-2xl font-bold text-teal-600">{t.educationSoftware}</p>
                  <p className="text-sm text-black/60 mt-1">
                    {t.educationSoftwareDesc}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-teal-600">{t.educationDatabase}</p>
                  <p className="text-sm text-black/60 mt-1">
                    {t.educationDatabaseDesc}
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-teal-600">{t.educationNetworks}</p>
                  <p className="text-sm text-black/60 mt-1">
                    {t.educationNetworksDesc}
                  </p>
                </div>

              </div>

            </div>
          </div>


        </div>
      </section>
    </main>
  );
}
