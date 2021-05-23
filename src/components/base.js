import React from "react"
import Footer from "../layout/footer"
import Header from "../layout/header"
import Main from "../layout/main"

import * as styles from "../css/base.module.css"

const Base = ({ children }) => (
  <div className={styles.base}>
    <Header />
    <Main className={styles.main}>{children}</Main>
    <Footer />
  </div>
)

export default Base
