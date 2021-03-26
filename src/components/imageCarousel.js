import React from "react"
import Carousel from "react-bootstrap/Carousel"

export default function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1024x576/?developer,programming"
                    alt="pc"
                />
                <Carousel.Caption>
                    <h3>This is a picture about developer</h3>
                    <p>
                        It's displaying randomly, so it'll change every time you
                        reload.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1024x576/?pc,desktop"
                    alt="internet"
                />

                <Carousel.Caption>
                <h3>This is a picture about pc</h3>
                    <p>
                        It's displaying randomly, so it'll change every time you
                        reload.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1024x576/?internet"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3>This is a picture about internet</h3>
                    <p>
                        It's displaying randomly, so it'll change every time you
                        reload.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
