import React, { useState } from "react"

// components
import Navigation from "./navigation"
import MobileNavigation from "./mobileNavigation"
import Footer from "./footer"

// styles
import "../styles/main.scss"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
      <MobileNavigation navOpen={navOpen} setNavOpen={setNavOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

// const pageTransition = {
//   initial: {
//     opacity: 0,
//     y: 20,
//   },
//   enter: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       delay: 0.5,
//       when: "beforeChildren",
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: 20,
//     transition: {
//       duration: 0.5,
//     },
//   },
// }

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Navigation />
//       {/* <AnimatePresence>
//         <motion.main
//           key={location.pathname}
//           variants={pageTransition}
//           initial="initial"
//           animate="enter"
//           exit="exit"
//         > */}
//       {children}
//       {/* </motion.main>
//       </AnimatePresence> */}
//       <Footer />
//     </>
//   )
// }
