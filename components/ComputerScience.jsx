import React from 'react';
import { Figure, Jumbotron } from 'react-bootstrap';
import sqlphoto from './database-sql.jpg';
import pyphoto from './python_image.jpg';
import csphoto from './cs-image.jpg';
import './ComputerScience.css';

const ComputerScience = () => {
    return (
        <div>
            <Jumbotron>
                <div id="jumbo-image">
                    <Figure.Image
                        width={300}
                        height={180}
                        alt="photo"
                        src={csphoto}
                    />
                    <p>
                        <strong>Welcome to Computer Science world.</strong> You can learn and understand with the uploaded content and docs provided on the pages. <br /> So go ahead and learn whatever you want.
                </p>
                </div>
            </Jumbotron>
            <div className="containercs">
                <Figure>
                    <a href="/computer_science">
                        <Figure.Image
                            width={500}
                            height={180}
                            alt="photo"
                            src={pyphoto}
                        />
                    </a>
                    <Figure.Caption>
                        <a href="/computer_science">
                            <h2><strong>Learn Python</strong></h2>
                        </a>
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <a href="/computer_science/mysql">
                        <Figure.Image
                            width={500}
                            height={180}
                            alt="photo"
                            src={sqlphoto}
                        />
                    </a>
                    <Figure.Caption>
                        <a href="/computer_science/mysql">
                            <h2><strong>Learn Mysql</strong></h2>
                        </a>
                    </Figure.Caption>
                </Figure>
            </div>
        </div>
    )
}

export default ComputerScience
