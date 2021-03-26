import React from "react"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import ImageCarousel from "../components/imageCarousel"

export default function Home() {
    return (
        <Layout>
            <ImageCarousel />

            <div class="my-4">
                <h1>Hello world!</h1>
                <p>
                    I suddenly became interested in React.js, so I decided to do
                    a quick rework of my GitHubPage using React and Gatsby.
                </p>
            </div>

            <h1>About this site</h1>
            <p>You may think you'll find something useful here, but there's nothing interesting here that you'd expect.</p>

        </Layout>
    )
}
