import CloseIcon from "assets/delete_white.png";
import HamburgerIcon from "assets/menu_icon_white.png";
import { Text } from "components";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

/** Component */

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <TopBar className="menu">
        <LogoContainer>LOGO HERE</LogoContainer>
        <MenuBtn src={HamburgerIcon} onClick={() => setIsOpen(true)} />
      </TopBar>
      <MenuWrapper isOpen={isOpen}>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setIsOpen(false)}
        >
          <CloseBtn src={CloseIcon} />
          <Text color="white">Close</Text>
        </div>
        <Menu stackable>
          <Menu.Item position="right" name="services">
            <ScrollLink
              to={"Services"}
              spy
              smooth
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              Services
            </ScrollLink>
          </Menu.Item>

          <Menu.Item name="aboutus">
            <ScrollLink
              to={"Trust"}
              spy
              smooth
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
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
      </MenuWrapper>
    </Wrapper>
  );
};

/** Styles */

const Wrapper = styled.div`
  height: 41px;
  width: 100vw;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 10;

  a {
    cursor: pointer;
    color: white;
    font-size: 1.35rem;
  }

  .menu {
    background-color: black;
  }

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const TopBar = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 7px 23px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 4px 8px;
  position: sticky;
  width: 100%;
`;

const MenuBtn = styled.img`
  cursor: pointer;
  height: 100%;
  width: auto;
`;

const CloseBtn = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  background-color: black;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 7px 23px -4px rgba(0, 0, 0, 0.75);
  left: ${({ isOpen }) => (isOpen ? "0%" : "100%;")};
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: left 0.35s ease-out;
  width: 100vw;
`;

const LogoContainer = styled.div`
  flex: 1;
  color: white;
`;

/** Exports */

export default NavbarMobile;
