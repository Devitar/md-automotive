import { useCallback } from "react";
import styled from "styled-components";

/** Types */

type Props = {
  /** Whether to justify the text to the center, left, right, top or bottom. Default: left */
  align?: "center" | "left" | "right";
  /** Sets a background color on the text (for readability in some situations). */
  backgroundColor?: string;
  /** Bolds the text. Default: false */
  bold?: boolean;
  className?: string;
  /** Colors the text. Default: black */
  color?: string;
  /** Sets the font size in pixels. Default: 14 */
  fontSize?: string;
  /** Flag stating whether this is a header. */
  header?: boolean;
  /** Sets the font style. */
  italic?: boolean;
  /** Primary header tag. */
  primaryHeader?: boolean;
  /** Text decoration */
  textDecoration?: string;
  /** Flags the text as a link (of a certain type if chosen, will use a generic if not),
   * and will be rendered as an `<a>` tag instead. Default: false */
  link?: boolean | "email" | "telephone" | "textMessage";
  /** Masks a link with different text. Ignored if the text is not a link. */
  mask?: string;
  /** Indicates whether to open a link in a new tab or not. Default: true */
  newTab?: boolean;
};

/** A malleable component for rendering text or links. */
const Text = ({
  align = "left",
  backgroundColor,
  bold = false,
  children,
  className,
  color,
  fontSize,
  header = false,
  italic,
  primaryHeader = false,
  textDecoration,
  link = false,
  mask,
  newTab = true,
}: React.PropsWithChildren<Props>) => {
  const RenderHeader = useCallback(
    () =>
      primaryHeader ? (
        <PrimaryHeaderRenderer
          align={align}
          bold={bold}
          color={color}
          className={className}
          fontSize={fontSize}
          italic={italic}
          textDecoration={textDecoration}
          backgroundColor={backgroundColor}
        >
          {children}
        </PrimaryHeaderRenderer>
      ) : (
        <HeaderRenderer
          align={align}
          bold={bold}
          color={color}
          className={className}
          fontSize={fontSize}
          italic={italic}
          textDecoration={textDecoration}
          backgroundColor={backgroundColor}
        >
          {children}
        </HeaderRenderer>
      ),
    [
      align,
      backgroundColor,
      bold,
      children,
      className,
      color,
      fontSize,
      italic,
      primaryHeader,
      textDecoration,
    ]
  );

  return !link ? (
    header ? (
      RenderHeader()
    ) : (
      <TextRenderer
        align={align}
        bold={bold}
        color={color}
        className={className}
        fontSize={fontSize}
        italic={italic}
        textDecoration={textDecoration}
        backgroundColor={backgroundColor}
      >
        {children}
      </TextRenderer>
    )
  ) : (
    <LinkRenderer
      href={
        link === "email"
          ? `mailto:${children as string}`
          : link === "telephone"
          ? `tel:${children as string}`
          : link === "textMessage"
          ? `sms:${children as string}`
          : (children as string)
      }
      className={className}
      target={newTab ? "_blank" : undefined}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      color={color}
      italic={italic}
      textDecoration={textDecoration}
    >
      {mask ? mask : children}
    </LinkRenderer>
  );
};

/** Styles */

const TextRenderer = styled.p<Omit<Props, "children" | "link" | "header">>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  color: ${({ color }) => color};
  display: inline;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "1.2rem")};
  font-style: ${({ italic }) => (italic ? "italic" : undefined)};
  font-weight: ${({ bold }) => (bold ? "bold" : 400)};
  text-align: ${({ align }) => align};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;
const LinkRenderer = styled.a<Omit<Props, "children" | "link" | "header">>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  color: ${({ color }) => color};
  display: flex;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "1rem")};
  font-style: ${({ italic }) => (italic ? "italic" : undefined)};
  font-weight: ${({ bold }) => (bold ? "bold" : 400)};
  text-align: ${({ align }) => align};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

const PrimaryHeaderRenderer = styled.h1<
  Omit<Props, "children" | "link" | "header">
>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  color: ${({ color }) => color};
  display: inline;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "1.2rem")};
  font-style: ${({ italic }) => (italic ? "italic" : undefined)};
  font-weight: ${({ bold }) => (bold ? "bold" : 400)};
  text-align: ${({ align }) => align};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;
const HeaderRenderer = styled.h2<Omit<Props, "children" | "link" | "header">>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  color: ${({ color }) => color};
  display: inline;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "1.2rem")};
  font-style: ${({ italic }) => (italic ? "italic" : undefined)};
  font-weight: ${({ bold }) => (bold ? "bold" : 400)};
  text-align: ${({ align }) => align};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

/** Exports */

export default Text;
