import "../styles/bootstrap.css";
import "../styles/style.css";
import Header from "../components/header";
import Aside from "./../components/aside";
import Footer from "./../components/footer";
import { motion, AnimatePresence } from "framer-motion";
import useRouteChangeHandler from "../hooks/useRouteChangeHandler";

const fadeIn = {
  opacity: 1,
  transition: { ease: "easeInOut", duration: 0.5 },
};

const fadeOut = { opacity: 0 };

function MyApp({ Component, pageProps, router }) {
  const { routeChanging } = useRouteChangeHandler();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="container-lg px-0 parent">
        <Header />
        <div className="d-flex flex-wrap">
          <main className="col-lg-8">
            <motion.div
              exit={fadeOut}
              initial={fadeOut}
              animate={routeChanging ? fadeOut : fadeIn}
            >
              <Component {...pageProps} key={router.route} />
            </motion.div>
          </main>
          <Aside className="col-lg-4 d-none d-lg-block" />
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
