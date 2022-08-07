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
                Explore our guides and examples to integrate XRMOD engine easily
                into your apps. And make amzing XR-Experience.
              </Translate>
            </p>
          </div>

          <Section title="Get to know XRMOD">
            <Card
              title={translate({
                message: "What is XRMOD engine",
                description: "The card title",
              })}
              description={translate({
                message:
                  "Take you to understand xrmod before and after, let you know more about xrmod engine.",
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
                  "Essential reading for a better understanding of how to best use XRMOD SDKs",
                description: "The card description",
              })}
              to="/how-xrmod-works"
            />
          </Section>

          <Section title="📱 Mobile SDKs" id="mobile-sdks">
            <Card
              title="Android"
              description={translate({
                message: "Integrate XRMOD in your Android App",
                description: "The card description",
              })}
              to="/android-sdk/"
              icon={<AndroidIcon />}
            />
            <Card
              title="iOS"
              description={translate({
                message: "Integrate XRMOD in your iOS App",
                description: "The card description",
              })}
              to="/ios-sdk/"
              icon={<AppleIcon />}
            />
            <Card
              title="Flutter"
              description={translate({
                message: "Integrate XRMOD in your Flutter App",
                description: "The card description",
              })}
              to="/flutter-sdk/"
              icon={<FlutterIcon />}
            />
            <Card
              title="Unity Engine"
              description={translate({
                message: "Develop on Unity Engine using XRMOD.",
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
                  "Use them to release our content to all applications using the XR-MOD framework.",
                description: "The card description",
              })}
              to="/experience-manual/dev-tools/package-tools/"
              icon={<PackageTools />}
            />

            <Card
              title="ObjectCapture"
              description={translate({
                message:
                  "Object Capture uses photogrammetry to turn a series of pictures into 3D-Model file.",
                description: "The card description",
              })}
              to="/experience-manual/dev-tools/object-capture/"
              icon={<ThreeDModelIcon />}
            />

            <Card
              title="Remote Debug"
              description={translate({
                message: "A remote debugging tool for AR experience develop.",
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
