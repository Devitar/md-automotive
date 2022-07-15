import LogoWide from "assets/logo-transparent-wide.webp";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

/** Component */

const Navbar = () => {
  return (
    <Wrapper>
      <Menu fixed="top">
        <Menu.Item header>
          <LogoContainer>
            <img src={LogoWide} alt="" />
          </LogoContainer>
        </Menu.Item>

        <Menu.Item position="right" name="services">
          <ScrollLink to={"Services"} spy smooth duration={500} offset={-50}>
            Services
          </ScrollLink>
        </Menu.Item>

        <Menu.Item name="aboutus">
          <ScrollLink to={"AboutUs"} spy smooth duration={500} offset={-50}>
            About Us
          </ScrollLink>
        </Menu.Item>

        <Menu.Item name="reviews">
          <a
            href="https://www.google.com/search?q=md+automotive+repair&sxsrf=ALiCzsam9kQDSuwZEk45E-JBy1O5lfzWbw%3A1657415674221&source=hp&ei=-ifKYrSxCtCA0PEP14iggAM&iflsig=AJiK0e8AAAAAYso2CmqF0WrvfNxdnUUwISUxj75KonsK&ved=0ahUKEwi0loTEku34AhVQADQIHVcECDAQ4dUDCAk&uact=5&oq=md+automotive+repair&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgQIIxAnOgsIABCABBCxAxCDAToICAAQgAQQsQM6CwguELEDEIMBENQCOgsILhCABBCxAxCDAToFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOg4ILhCxAxCDARDHARDRAzoLCC4QgAQQsQMQ1AI6CAguEIAEELEDOg4ILhCxAxCDARDHARCvAToICAAQsQMQgwE6CggAEIAEEIcCEBQ6CAgAEIAEEMkDUABYmRJg8xJoAHAAeACAAeICiAHjF5IBCDAuMTcuMS4xmAEAoAEB&sclient=gws-wiz#lkt=LocalPoiReviews&trex=m_t:lcl_akp,rc_ludocids:1072264808114827680,rc_q:md%2520automotive%2520repair,ru_gwp:0%252C7,ru_q:md%2520automotive%2520repair,trex_id:tVdkId&lpg=cid:CgIgAQ%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            Reviews
          </a>
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
};

/** Styles */

const Wrapper = styled.div`
  a {
    cursor: pointer;
    color: white;
    font-size: 1.35rem;
  }

  .menu {
    background-color: black;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  img {
    height: 40px;
    width: 250px;
  }
`;

/** Exports */

export default Navbar;
