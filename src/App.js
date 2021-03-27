import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic1 from "./images/profilePic1.jpg"
import ProfilePic2 from "./images/profilePic2.jpg"
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Image className="landscapePic" src={ProfilePic1} alt="Placeholder for picture of me" />
        </Row>
        <Row>
            <p className="strongText"> The World Could Use a Splash of Minimalism </p>
        </Row>
        <Row>
            <p className="pageText">
                In the course of 10 years I've worked as a software developer, a hacker/integrator for the government, 
                and a data collector in my professional life. In my spare time I'm a tech enthusiasts who can fall down a rabbit hole 
                for days researching and playing around with different concepts in the tech world. Having worked in both government and 
                private sector, it's given me an interest perspective on how operations are done. At the core, they do a lot with a lot of 
                overhead to match. I've spent the better half of my 10 years trying to minimalize processes to make them possible for the 
                correct audience to read and comprehend. That audience being humans ie <strong>you</strong>.
            </p>
        </Row>
        <Row>
        <Image className="landscapePic" src={ProfilePic2} alt="Placeholder for picture of me" />
        </Row>
        <Row>
            <Col md={4}>
            <p className="pageText">
                I graduated Tuskegee University in 2012 with a Bachelor's of Science degree. There I met an very influencial
                professor name Dr. C. L. Chen who always challenged me to find the most optimal solution to a problem. As I went
                further in my career I started realizing I was losing touch with the lessons that he taught me. Stress was a major
                indicator of this. Once I realized this, I sought to take a more minimalistic approach to my work to achieve the 
                greatest possible outcome with the least amount of work. I can still remember him telling me to 
                <i>"think smarter, not harder Mr. Ellison!"</i>
            </p>
            </Col>

            <Col md={4}>
            <p className="pageText">
                Today I work as a developer who wants to share the talents I've amassed with the world. A number of questions I have
                to ask in my day to day. What's more important, saving money or performance? How feasible are the things the client has
                asked for? Those are two very common questions I ask myself and clients. Experience has shown me that the client isn't so much
                concerned with the how something works. That's a concern for me. With that being said, the minmalistic approach gives: quick
                turnaround, ease of readibility, simplicity in figuring out errors, etc. Things that make clients very happy.  
            </p>
        </Col>
        <Col md={4}>
            <p className="pageText">
                My outside hobbies have a habbit of bleeding into my professional life. The numebr of times I've been asked to write scripts
                that can mitigate the human error, setup hardware that fits a particular need, open a system that been locked by user input
                error, etc has honestly astonished me. Reading about different concepts is fun at times but nothing has ever beat just figuring it
                out with my hands. Just give me the basic idea and I'll figure out the rest in order to give a product pleasing to eye.

            </p>
        </Col>
        </Row>
    </Container>
    );
  }
}

export default App;
