import React from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import styles from "./style.module.css";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";

/**
 * @typedef {{name: string, component: string}} ComponentEntry
 */

export default function Pricing() {
  const router = useHistory();

  return (
    <Layout
      description={translate({
        message: "pricingpage.breif",
        description:
          "XRMOD Engine is a cross platform XR Solution SDKs, ready to launch 🚀",
      })}
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <center>
            <h1>
              <Translate>XRMOD Engine Plans</Translate>
            </h1>
            <p>
              <Translate>
                All plans are on a per-company basis, meaning you can publish as
                many applications as you’d like under a single plan.
              </Translate>
              <br />
              <Translate>
                To boost the AR industry, we offer a completely free commercial
                license that suits most developers.
              </Translate>
            </p>
            <a href="mailto:info@phantomsxr.com" className={styles.button}>
              <Translate>Contact Us</Translate>
            </a>
          </center>
          <div className={styles.grid}>
            <PricingCard
              key="01"
              section={translate({
                message: "Cummunity Plan",
                description: "pricingcard.title",
              })}
              pricing={translate({
                message: "FREE",
                description: "pricingcard.pricing",
              })}
              description={translate({
                message:
                  "Commercial XRMOD SDK license for developers and XR studios.",
                description: "pricingcard.description",
              })}
              features={[
                { id: "1", name: <Translate>"Fully documents"</Translate> },
                { id: "2", name: <Translate>Whitout watermark</Translate> },
                { id: "3", name: <Translate>UDM System Support</Translate> },
                { id: "4", name: <Translate>Creative tools chain</Translate> },
                {
                  id: "5",
                  name: <Translate>Multi-platform support</Translate>,
                  sub: "1",
                },
                {
                  id: "6",
                  name: <Translate>Unlimited number of apps</Translate>,
                },
                {
                  id: "7",
                  name: <Translate>Write once deploy anywhere</Translate>,
                },
                {
                  id: "8",
                  name: <Translate>10k+ API capacity pre month</Translate>,
                  sub: "2",
                },
                {
                  id: "9",
                  name: <Translate>Community and github support</Translate>,
                },
                {
                  id: "10",
                  name: <Translate>More than 20+ XR core features</Translate>,
                },
              ]}
              remarks={[
                {
                  id: "1",
                  sub: "1",
                  name: (
                    <Translate>Only support Android and iOS platform</Translate>
                  ),
                },
                {
                  id: "2",
                  sub: "2",
                  name: (
                    <Translate>
                      Community version only use XRMOD Cloud
                    </Translate>
                  ),
                },
              ]}
            />

            <PricingCard
              key="02"
              section={translate({
                message: "Offline Plan",
                description: "pricingcard.title",
              })}
              pricing={translate({
                message: "$1500/Year",
                description: "pricingcard.pricing",
              })}
              description={translate({
                message:
                  "Suitable for use in environments where internet access is not available.",
                description: "pricingcard.description",
              })}
              features={[
                {
                  id: "11",
                  name: <Translate>Without network</Translate>,
                  sub: "1",
                },
                { id: "12", name: <Translate>Fully documents</Translate> },
                { id: "13", name: <Translate>Whitout watermark</Translate> },
                { id: "14", name: <Translate>UDM System Support</Translate> },
                { id: "15", name: <Translate>Creative tools chain</Translate> },
                {
                  id: "16",
                  name: <Translate>Multi-platform support</Translate>,
                  sub: "2",
                },
                {
                  id: "17",
                  name: <Translate>Unlimited number of apps</Translate>,
                },
                {
                  id: "18",
                  name: <Translate>Write once deploy anywhere</Translate>,
                },
                {
                  id: "19",
                  name: <Translate>Community and github support</Translate>,
                },
                {
                  id: "20",
                  name: <Translate>More than 20+ XR core features</Translate>,
                },
                {
                  id: "21",
                  name: (
                    <Translate>1 to 1 advanced technical support</Translate>
                  ),
                },
              ]}
              remarks={[
                {
                  id: "64",
                  sub: "1",
                  name: (
                    <Translate>
                      Cannot be mixed with Community or Private Cloud
                    </Translate>
                  ),
                },
                {
                  id: "63",
                  sub: "2",
                  name: (
                    <Translate>Only support Android and iOS platform</Translate>
                  ),
                },
              ]}
            />

            <PricingCard
              key="03"
              section={translate({
                message: "Private Cloud",
                description: "pricingcard.title",
              })}
              pricing={translate({
                message: "$22000/Year",
                description: "pricingcard.pricing",
              })}
              description={translate({
                message: "For companies that need to build XR systems.",
                description: "pricingcard.description",
              })}
              selected={styles.recommandcard}
              features={[
                {
                  id: "22",
                  name: <Translate>Private instance</Translate>,
                  sub: "1",
                },
                { id: "23", name: <Translate>Fully documents</Translate> },
                { id: "24", name: <Translate>Whitout watermark</Translate> },
                { id: "25", name: <Translate>UDM System Support</Translate> },
                { id: "26", name: <Translate>Creative tools chain</Translate> },
                {
                  id: "27",
                  name: <Translate>Multi-platform support</Translate>,
                  sub: "2",
                },
                {
                  id: "28",
                  name: <Translate>Unlimited number of apps</Translate>,
                },
                {
                  id: "29",
                  name: <Translate>Write once deploy anywhere</Translate>,
                },
                {
                  id: "30",
                  name: <Translate>Unlimited API capacity pre month</Translate>,
                },
                {
                  id: "31",
                  name: <Translate>Community and github support</Translate>,
                },
                {
                  id: "32",
                  name: <Translate>More than 20+ XR core features</Translate>,
                },
                {
                  id: "33",
                  name: (
                    <Translate>1 to 1 advanced technical support</Translate>
                  ),
                },
              ]}
              remarks={[
                {
                  id: "35",
                  sub: "1",
                  name: (
                    <Translate>
                      Private cloud instance on your platform of choice.
                    </Translate>
                  ),
                },
                {
                  id: "34",
                  sub: "2",
                  name: (
                    <Translate>
                      Only support Android and iOS platform.
                    </Translate>
                  ),
                },
              ]}
            />

            <PricingCard
              section={translate({
                message: "Premium Plans",
                description: "pricingcard.title",
              })}
              pricing={translate({
                message: "Contact for pricing",
                description: "pricingcard.pricing",
              })}
              description={translate({
                message: "For large-scale projects and custom AR solutions.",
                description: "pricingcard.description",
              })}
              features={[
                { id: "37", name: <Translate>Custom SDK</Translate> },
                {
                  id: "38",
                  name: <Translate>Private instance</Translate>,
                  sub: "1",
                },
                {
                  id: "39",
                  name: <Translate>Custom XRMOD Cloud</Translate>,
                  sub: "2",
                },
                { id: "40", name: <Translate>Fully documents</Translate> },
                { id: "41", name: <Translate>Whitout watermark</Translate> },
                { id: "42", name: <Translate>UDM System Support</Translate> },
                { id: "43", name: <Translate>Creative tools chain</Translate> },
                {
                  id: "44",
                  name: <Translate>Multi-platform support</Translate>,
                },
                {
                  id: "45",
                  name: <Translate>Unlimited number of apps</Translate>,
                },
                {
                  id: "46",
                  name: <Translate>Write once deploy anywhere</Translate>,
                },
                {
                  id: "47",
                  name: <Translate>Unlimited API capacity pre month</Translate>,
                },
                {
                  id: "48",
                  name: <Translate>Community and github support</Translate>,
                },
                {
                  id: "49",
                  name: <Translate>More than 20+ XR core features</Translate>,
                },
                {
                  id: "60",
                  name: (
                    <Translate>1 to 1 advanced technical support</Translate>
                  ),
                },
              ]}
              remarks={[
                {
                  id: "62",
                  sub: "1",
                  name: (
                    <Translate>
                      Private cloud instance on your platform of choice.
                    </Translate>
                  ),
                },
                {
                  id: "61",
                  sub: "2",
                  name: (
                    <Translate>
                      Only support Android and iOS platform.
                    </Translate>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function PricingCard({
  section,
  description,
  pricing,
  features,
  remarks,
  selected,
}) {
  return (
    <div className={clsx(styles.card, selected)}>
      <div className={styles.cardheader}>
        <h2>{section}</h2>
        <h3 className={pricing == "免费" || pricing == "FREE"? styles.free : ""}>{pricing}</h3>
        <p>{description}</p>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            {feature.name}
            {feature.sub && <sup>[{feature.sub}]</sup>}
          </li>
        ))}
      </ul>

      <div className={styles.cardbottom}>
        {remarks.map((remark) => (
          <p key={remark.id} className={styles.remarktext}>
            [{remark.sub}]:{remark.name}
          </p>
        ))}
      </div>
    </div>
  );
}
