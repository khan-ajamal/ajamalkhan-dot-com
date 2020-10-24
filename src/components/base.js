import React from "react"
import Footer from "../layout/footer"
import Header from "../layout/header"
import Main from "../layout/main"

const Base = ({children}) => (
    <>
    <Header />
    <Main>
        {children}
    </Main>
    <Footer />
    </>
)

export default Base