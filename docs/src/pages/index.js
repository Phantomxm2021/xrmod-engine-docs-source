import React from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../components/HomepageComponents";

import {
  APIReferenceIcon,
  FlutterIcon,
  UnityIcon,
  TerminalIcon,
  ThreeDModelIcon,
  PackageTools,
  AndroidIcon,
  AppleIcon,
} from "../icons";
import Translate, { translate } from "@docusaurus/Translate";

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="XRMOD Engine is a cross platform XR Solution SDKs, ready to launch 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>
              <Translate>XRMOD Engine Docs</Translate>
            </h2>
            <p>
              <Translate>
                Discover our guides and examples for seamless integration of the
                XRMOD engine into your applications, and create incredible XR
                experiences.
              </Translate>
            </p>
          </div>

          <Section title="🚀 Get to know XRMOD">
            <Card
              title={translate({
                message: "What is XRMOD engine",
                description: "The card title",
              })}
              description={translate({
                message:
                  "Explore XRMOD and unleash its potential for your XR projects.",
                description: "The card title",
              })}
              to="/what-is-xrmod-engine"
            />

            <Card
              title={translate({
                message: "How XRMOD works",
                description: "The card title",
              })}
              description={translate({
                message:
                  "Indispensable reading for gaining a deeper understanding of optimal usage of XRMOD SDKs.",
                description: "The card description",
              })}
              to="/how-xrmod-works"
            />

            <Card
              title={translate({
                message: "How to use XRMOD",
                description: "The card title",
              })}
              description={translate({
                message:
                  "Learn how to go from installing XRMOD to developing XR experiences using XRMOD.",
                description: "The card description",
              })}
              to="/experience-manual"
            />
          </Section>

          <Section title="📱 Mobile SDKs" id="mobile-sdks">
            <Card
              title="Android"
              description={translate({
                message:
                  "Integrating the XRMOD engine on the Android platform requires no modification to your existing business or codebase. Simply call a few APIs to embed the engine seamlessly.",
                description: "The card description",
              })}
              to="/android-sdk/"
              icon={<AndroidIcon />}
            />
            <Card
              title="iOS"
              description={translate({
                message:
                  "Integrating the XRMOD engine on the iOS platform requires no modification to your existing business or codebase. Simply call a few APIs to embed the engine seamlessly.",
                description: "The card description",
              })}
              to="/ios-sdk/"
              icon={<AppleIcon />}
            />
            <Card
              title="Flutter"
              description={translate({
                message:
                  "Integrating the XRMOD engine on the Flutter platform requires no modification to your existing business or codebase. Simply call a few APIs to embed the engine seamlessly.",
                description: "The card description",
              })}
              to="/flutter-sdk/"
              icon={<FlutterIcon />}
            />
            <Card
              title="Unity Engine"
              description={translate({
                message:
                  "Integrating the XRMOD engine into your Unity platform is a breeze, as it requires no modifications to your existing business or codebase.",
                description: "The card description",
              })}
              to="/unity-sdk/"
              icon={<UnityIcon />}
            />
          </Section>

          <Section title="🛠 Tools">
            <Card
              title="Package Tools Editor"
              description={translate({
                message:
                  "Package Tools are essential content creation tools within the XRMOD framework, enabling effortless management of resources, algorithms, compression, and more.",
                description: "The card description",
              })}
              to="/experience-manual/dev-tools/package-tools/"
              icon={<PackageTools />}
            />

            <Card
              title="ObjectCapture"
              description={translate({
                message:
                  "Transform your photos into stunning 3D models, optimized for AR, with the new Object Capture API on macOS Monterey.",
                description: "The card description",
              })}
              to="/experience-manual/dev-tools/object-capture/"
              icon={<ThreeDModelIcon />}
            />

            <Card
              title="Remote Debug"
              description={translate({
                message: "A remote debugging tool for XR experience develop.",
                description: "The card description",
              })}
              to="/experience-manual/dev-tools/remote-debug/"
              icon={<TerminalIcon />}
            />
          </Section>

          <Section title="📜 API Reference">
            <Card
              title={translate({
                message: "API Reference",
                description: "The card title",
              })}
              description={translate({
                message: "XRMOD REST API Reference",
                description: "The card title",
              })}
              to="/api/"
              icon={<APIReferenceIcon />}
            />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
