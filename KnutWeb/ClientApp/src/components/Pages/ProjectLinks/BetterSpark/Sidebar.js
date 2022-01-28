import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faBoxes, faChartBar, faClock, faCog, faPlusCircle, faTasks, faTicketAlt, faTv } from "@fortawesome/free-solid-svg-icons";

const NavWrapper = styled(Nav)`
  width: 100%;
	flex-direction: column;
`;
const CreateTicket = styled(Nav.Link)`
	background-color: #fcde06;
	color: black;
	padding: 20px 10px;
	&:hover {
		background-color: #fde431;
		color: black;
	}
`;
const Link = styled(Nav.Link)`
	color: white;
	padding: 10px;
	border-bottom: 1px solid #d2d2d2;
	&:hover {
		background-color: #505050;
		color: white;
	}
`;
const LinkItems = styled('span')`
	display: flex;
	justify-content: left;
`;
const LinkText = styled('span')`
	padding-left: 20px;
`;
const Side = styled("div")`
  position: relative;
  overflow: hidden;
  flex: 0 0 auto;
  height: 100%;
  width: 215px;
`;
const SparkSideNav = styled("div")`
  background-color: #252525;
  color: #d2d2d2;
  font-weight: 400;
  font-size: 14px;
  font-family: GraphikRegular, sans-serif;
  line-height: 1.2857;
  height: 100%;
  padding: 40px 0px;
`;

export const Sidebar = () => {
  let NavOptions = [ {text: 'Create ticket', icon: faPlusCircle}, {text: 'Overview', icon: faBorderAll}, {text: 'Tickets', icon: faChartBar}, {text: 'Tasks', icon: faTasks}, {text: 'Ticket templates', icon: faBoxes}, 
	{text: 'Time', icon: faClock}, {text: 'Ticket manager', icon: faTicketAlt}, {text: 'TV', icon: faTv}, {text: 'Settings', icon: faCog}];
	const [option, setOption] = useState(NavOptions);

  return (
    <Side>
      <SparkSideNav>
        <div>
         <NavWrapper>
				 {option.map((x, key) => {
                return (
									<div>
										{key === 0 ? (
											<CreateTicket id={key}>
												<LinkItems>
														<FontAwesomeIcon icon={x.icon} /> <LinkText>{x.text}</LinkText>
												</LinkItems>
										</CreateTicket>
										) : (
											<Link id={key}>
												<LinkItems>
														<FontAwesomeIcon icon={x.icon} /> <LinkText>{x.text}</LinkText>
												</LinkItems>
										</Link>
										)}
									</div>
                )
            })}
				 </NavWrapper>
        </div>
      </SparkSideNav>
    </Side>
  );
};
