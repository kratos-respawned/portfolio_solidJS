// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "@fontsource/montserrat";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Kratos-Portfolio</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* favicon */}
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Body class="gradient bg-pBlack ">
        <Suspense>
          <ErrorBoundary>
            <main class="max-w-screen-xl px-5 mx-auto font-montserrat">
              <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
              <Footer />
            </main>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
