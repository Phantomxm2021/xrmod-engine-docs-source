import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description">
          <Translate>
            The XRMOD engine provides a solution for implementing augmented
            reality functions on the cross platform. Embedding XRMOD engine on
            the cross platform does not need to change your original business
            and code, and only needs to call several APIs to complete the
            embedding. XRMOD engine is a free and without watermark XR
            construction system that supports commercial licenses (free
            commercial licenses).
          </Translate>
        </p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>
                <Translate>
                  Sign up to get 10,000 API calls per month for free!
                </Translate>
              </p>
              <Link href="https://phantomsxr.com/signup">Sign Up</Link>
            </div>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
