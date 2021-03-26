import React from "react"
import Header from "./header"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Container>
                <div class="pt-4">{children}</div>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
