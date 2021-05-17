import React from 'react';
import { Card, Button, Figure } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import sql from './content/sql_image.png';

const MySQL = () => {
    return (
        <div>
            <Figure>
                <div style={{
                    textAlign:"center",
                    }}>
                <Figure.Image
                    width={350}
                    height={180}
                    alt="171x180"
                    src={sql}
                />
                <FigureCaption>
                    <h5>
                <strong>Introduction to MySQl</strong>
                    </h5>
                <br />
                    MySQL is the world's most popular open-source database. Despite its powerful features, MySQL is simple to set up and easy to use. Below are some instructions to help you get MySQL up and running in a few easy steps. We also explain how to perform some basic operations with MySQL using the mysql client.
                    MySQL is a fast, easy-to-use RDBMS being used for many small and big businesses. MySQL is developed, marketed and supported by MySQL AB, which is a Swedish company. MySQL is becoming so popular because of many good reasons. For more check official website by clicking <a href="https://www.tutorialspoint.com/mysql/mysql-introduction.htm">here</a>.</FigureCaption>
                </div>
            </Figure>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Installation of MySQL</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            To Install MySQL on machine go for the steps given below link.
                        </Card.Text>
                    <Button variant="primary"><a href="/computer_science/mysql/installation-of-mysql" style={{color:"white",}}>MySQL Installation Process</a></Button>
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MySQL
