import { Menu, MenuItemProps } from "semantic-ui-react";
import { useCallback, useState } from "react";
import styled from "styled-components";

/** Component */

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>(
    "editorials"
  );
  const handleItemClick = useCallback(
    (
      _: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      { name }: MenuItemProps
    ) => setActiveItem(name),
    []
  );

  return (
    // <NavbarSticky>
    <Menu fixed="top">
      <Menu.Item header>
        <LogoContainer>LOGO HERE</LogoContainer>
      </Menu.Item>

      <Menu.Item
        position="right"
        name="editorials"
        active={activeItem === "editorials"}
        onClick={handleItemClick}
      >
        Editorials
      </Menu.Item>

      <Menu.Item
        name="reviews"
        active={activeItem === "reviews"}
        onClick={handleItemClick}
      >
        Reviews
      </Menu.Item>

      <Menu.Item
        name="upcomingEvents"
        active={activeItem === "upcomingEvents"}
        onClick={handleItemClick}
      >
        Upcoming Events
      </Menu.Item>
    </Menu>
    // </NavbarSticky>
  );
};

/** Styles */

const LogoContainer = styled.div`
  flex: 1;
`;

/** Exports */

export default Navbar;
