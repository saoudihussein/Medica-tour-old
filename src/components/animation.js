import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import Header from "./header"

import "./animation.css"

const Layout = ({ children }) => {
  

  return (
    <>
      <div
        style={{
      
        }}
      >
        <motion.main
          initial={{
            opacity: 0,
            x: -200
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: 200
          }}
          transition={{
            type: "spring",
            mass: 0.35,
            velocity: 900,
            stiffness: 75,
            duration: 0.3
          }}
        >
          {children}
        </motion.main>
        <footer
          style={{
            marginTop: `2rem`
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout