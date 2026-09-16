"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CeylonixHeader from "../../../Components/Ceylonix/Header";
import CeylonixFooter from "../../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../../Components/Ceylonix/CTA";
import PackageDetails from "../../../Components/Ceylonix/PackageDetails";
import { getPackageBySlug, getPackages } from "../../../lib/getPackages";
import { useLocale } from "../../../Components/LanguageProvider";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";

const PackageDetailsPage = () => {
  const { t, locale } = useLocale();
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [pkg, setPkg] = useState(undefined);
  const [otherPackages, setOtherPackages] = useState([]);

  useEffect(() => {
    if (!slug) return;
    setPkg(undefined);

    Promise.all([getPackageBySlug(slug, locale), getPackages(locale)])
      .then(([current, packages]) => {
        setPkg(current);
        setOtherPackages(packages.filter((item) => item.slug !== slug));
      })
      .catch(() => setPkg(null));
  }, [slug, locale]);

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#0C111D" }}>
        {pkg === undefined ? (
          <p className="ceylon-container text-white" style={{ padding: "160px 0 80px" }}>
            {t("packagePage.loading")}
          </p>
        ) : (
          <PackageDetails pkg={pkg} otherPackages={otherPackages} />
        )}
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default PackageDetailsPage;
