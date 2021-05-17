import React from 'react';
import './mysql-installation.css';
import screen1 from "./content/1.JPG";
import screen2 from "./content/2.JPG";
import screen3 from "./content/3.JPG";
import screen4 from "./content/4.JPG";
import screen5 from "./content/10.JPG";
import screen6 from "./content/11.JPG";
import screen7 from "./content/12.JPG";
import screen8 from "./content/13.JPG";
import screen9 from "./content/14.JPG";
import screen10 from "./content/15.JPG";
import screen11 from "./content/16.JPG";
import screen12 from "./content/17.JPG";
// import sql from "./content/download.png";
import { BsArrowReturnRight } from "react-icons/bs";
import win from "./content/download (1).png";
// import screen13 from "./content/18.JPG";
import { Figure, Card } from 'react-bootstrap'


export default function content() {
    // let img1 = require('./content/1.jpg');
    return (
        <div className='content'>
            <div className="contain">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={win} />
                <Card.Body>
                    <Card.Text>
                    Download the mysql windows installer from <a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noreferrer">here</a> .
                    For other operating system you can easily search or check out on our social media handles. 
    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen1}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight /> Click on the recommended Download option.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen2}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight />If you have a fast Internet Connection then go for "mysql-installer-web-community". The required utilities will get downloaded during installation.</h3>
                    <h3><BsArrowReturnRight />If you want to install it offline then go for "mysql-installer-community"(<strong>Recommended</strong>).</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen3}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight />Open the downloaded file and run it.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen4}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight/>Choose a setup type as Full.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen5}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight />It will check requirements. You can leave such requirements like Visual code version or something else which you think are not necessary for you.</h3>
                    <h3><BsArrowReturnRight />Follow the other steps as per instructions given in installer.</h3>
                    <h3><BsArrowReturnRight />In Type and Networking choose configuration type as Development Computer.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen6}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight/>In Authentication Method choose Recommended option 'Using Strong Password Encryption for Authentication'.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen7}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight/>Kindly Enter a Strong password in Accounts and choose root as User role. Other user can be created by root user in commandline using commands.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen8}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight/>You can change Windows service as per your needs but for a beginner remain the options as such as shown. Just click Next.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={430}
                    height={180}
                    alt="171x180"
                    src={screen9}
                />
                <Figure.Image
                    width={430}
                    height={180}
                    alt="171x180"
                    src={screen10}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight/>In Apply Configuration Click on Execute.</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={screen11}
                />
                <Figure.Image
                    width={332}
                    height={180}
                    alt="171x180"
                    src={screen12}
                />
                <Figure.Caption>
                    <h3><BsArrowReturnRight/>Click on Finish. Then Open start menu and type 'my-sql' in search bar. Click on 'my-sql commandline client'.</h3>
                </Figure.Caption>
            </Figure>
        </div>
    )
}

