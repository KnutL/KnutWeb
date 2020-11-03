import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 30px;
`;
const CardWrapper = styled(Card)`
  width: 20rem;
  height: 100%;
  text-shadow: 2px 2px black;
  background-color: ${(props) => props.randomColor};
  margin-bottom: 20px;
  .card-body {
    min-height: 230px;
  }
  .card-title,
  .card-body {
    font-size: 1.5rem;
  }
  .card-header {
    height: 80px;
  }
`;
const ListGroupWrapper = styled(ListGroup)`
  font-size: 0.7em;
  padding-top: 10px;
  text-shadow: 0px 0px;
`;

export const AboutMe = ({ randomColor }) => {

  const companyList = [
    {
      company: "ProgramDuon",
      role: "Developer",
      description:
        "Internship and summer job working in a team developing an inventory system in React",
      skills: [".NET", "React", "MVC"],
    },
    {
      company: "Hogia Infrastructure Products",
      role: "Developer",
      description:
        "Developed systems in a team with UX-designers, product owners, testers and other developers",
      skills: [".NET", "Aurelia", "NHibernate", "Karma"],
    },
    {
      company: "Ebeling Webbyrå",
      role: "Front End Developer",
      description: "Developed E-shops in close communication with customer",
      skills: ["React", "E-commerce", "Jetshop Flight"],
    },
  ];

  return (
    <Wrapper>
      {companyList.map((item, index) => {
        return (
          <CardWrapper key={index} id="card-wrapper" randomColor={randomColor + '55'}>
            <Card.Header>
              <Card.Title className="align-middle">{item.company}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title>{item.role}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <button
                id="button-collapse"
                type="button"
                className="btn btn-dark"
                data-toggle="collapse"
                data-target={"#skill" + index}
              >
                Skills
              </button>
              <div id={"skill" + index} className="collapse">
                <ListGroupWrapper >
                  {item.skills.map((skill, index) => {
                    return (
                      <ListGroupItem
                        key={index}
                        className="list-group-item-dark"
                      >
                        {skill}
                      </ListGroupItem>
                    );
                  })}
                </ListGroupWrapper>
              </div>
            </Card.Footer>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};
