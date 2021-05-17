import React from 'react';
import './home.css';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import homephoto from "./content/homeimg.jpg";
import homephoto2 from "./content/homeimg2.jpeg";
import homephoto3 from "./content/homeimg3.jpeg";
import photomath from "./math-image.jpg";
import photocs from "./cs-image.jpg";


const home = () => {

    return (
        <div>
            {/* carousel */}
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-container"
                        src={homephoto2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="heading3"><strong >Welcome to Student Help Desk</strong></h3>
                        <p>Now students can help each other</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-container"
                        src={homephoto}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="heading3"><strong>Explore with your friends</strong> </h3>
                        <p>Help other students and clear everything. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-container"
                        src={homephoto3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="heading3" ><strong>Any subject, Any Query, Any time.</strong></h3>
                        <p>Get the right point of view and start thinking over it with exploring.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <h5>SHD is an initiative for students to share their right point of view and make it understandable for other students. </h5 >
            <p>Students can share their contents with Email example@gmail.com and can follow us on facebook and instagram to share their views and suggestions.</p>
            <div id="center">
                <h4>
                    <strong>
                        Subjects currently available
                </strong>
                </h4>

                <div id="contain_sub">
                <Card style={{ width: '18rem' }}>
                    <a href="/mathematics">
                    <Card.Img variant="top" src={photomath} />
                    </a>
                    <Card.Body>
                        <Card.Title>Mathematics</Card.Title>
                        <Card.Text>
                            Learn Higher Mathematics and visualize. Increase your Analytical power and solve Real World Problems.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <a href="/computer_science">
                    <Card.Img variant="top" src={photocs} />
                    </a>
                    <Card.Body>
                        <Card.Title>Computer Science</Card.Title>
                        <Card.Text>
                            Learn Computer Science and bring your visualization on screen or in real world
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>



        </div>
    )
}

export default home
