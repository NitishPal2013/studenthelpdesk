import React from 'react';
import { Jumbotron, Container, Figure } from 'react-bootstrap';
import differentialphoto from './differential.gif';
import mathphoto from './math-image.jpg';
import realphoto from './real-analysis.jpg';
import './Mathematics.css';

const Mathematics = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <div id="contain_math">
                        <Figure.Image
                            width={300}
                            height={180}
                            alt="photo"
                            src={mathphoto}
                        />
                        <p>
                            <strong>Welcome to Mathematics world.</strong>You can learn and understand with the uploaded content and docs provided on the pages. <br /> So go ahead and learn whatever you want.
                        </p>
                    </div>
                </Container>
            </Jumbotron>
            <div className="containermath">
                <Figure>
                    <a href="/mathematics">
                        <Figure.Image
                            width={500}
                            height={180}
                            alt="photo"
                            src={differentialphoto}
                        />
                    </a>
                    <Figure.Caption>
                        <a href="/mathematics">
                            <h2><strong>Learn Differenrial Equation</strong></h2>
                        </a>
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <a href="/mathematics">
                        <Figure.Image
                            width={500}
                            height={180}
                            alt="photo"
                            src={realphoto}
                        />
                    </a>
                    <Figure.Caption>
                        <a href="/mathematics">
                            <h2><strong>Learn Real Analysis</strong></h2>
                        </a>
                    </Figure.Caption>
                </Figure>
            </div>
        </div>
    )
}

export default Mathematics
