import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rcp_login from "../../Assets/Projects/rcp-login.png";
import Grocernow from "../../Assets/Projects/GrocerNow.png";
import Textutils from "../../Assets/Projects/Textutils.png";
import todo from "../../Assets/Projects/todo.png";
import breakfast from "../../Assets/Projects/breakfast.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rcp_login}
              isBlog={false}
              title="Railway Concession Portal"
              description="The College Railway Concession Portal is a website that enables college students to apply for and obtain railway concessions online. The portal eliminates the need for students to physically visit college and submit paperwork, as the entire process can be completed through the website and the student only need to collect the concession with stamp which eliminates the queue for getting concession."
              ghLink="https://github.com/aniketpanchal52648/VJTI-Railway-Concession"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grocernow}
              isBlog={false}
              title="GrocerNow"
              description="Grocernow is an e-commerce website for organic grocery shopping. Customers can browse and purchase a wide selection of organic fruits, vegetables, meats, dairy products, and pantry staples from the comfort of their own home. The site features a user-friendly design, easy navigation, and secure checkout. Grocernow is committed to providing high-quality organic products at competitive prices, and offers a convenient delivery service for customers."
              ghLink="https://github.com/Jayeshbhere/GrocerNow"
              demoLink="https://jayeshbhere.github.io/GrocerNow/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Textutils}
              isBlog={false}
              title="Textutils"
              description="Textutils is a website that offers a variety of text editing tools. The website allows users to easily convert text to uppercase or lowercase, clear all text, copy text, and remove extra spaces. The website also has a preview feature which allows users to see the result of their editing in real-time. This website is helpful for users who frequently need to make text formatting changes, such as copy editors, content writers, and programmers. Textutils is user-friendly, fast and efficient and it helps users to save time and effort while editing the text."
              ghLink="https://github.com/Jayeshbhere/TextUtils-React" 
              demoLink="https://jayeshbhere.github.io/TextUtils-React/"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="todo list"
              description="Todo List is a website that allows users to create and manage their personal to-do lists. The website is built using React, a popular JavaScript library for building user interfaces. The website has a simple and easy-to-use interface, users can add, edit and delete tasks, mark tasks as complete and see the completed tasks. The website is designed to be fast and easy to use, making it a great tool for staying organized and managing tasks. The website is also mobile-friendly, which allows users to access their to-do lists on-the-go."
              ghLink="https://github.com/Jayeshbhere/todo_list-react-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breakfast}
              isBlog={false}
              title="Breakfast"
              description="Breakfast Viewer is a website that provides users with meal ideas for breakfast, lunch, evening and dinner using React. The website features a variety of breakfast, lunch, evening, and dinner options that can be filtered by dietary restrictions and ingredients. The website also includes a search function for users to find meal ideas according to their preference. The website is designed to be fast and responsive, making it easy for users to plan their meals on the go."
              ghLink="https://github.com/Jayeshbhere/Breakfast-react-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
