import styled from "styled-components";

type Props = {
  background?: "primary" | "secondary";
  ref?: React.MutableRefObject<HTMLDivElement | null>;
};

const Section = ({
  children,
  background,
  ref,
}: React.PropsWithChildren<Props>) => {
  return (
    <SectionWrapper ref={ref} background={background}>
      {children}
    </SectionWrapper>
  );
};

/** Styles */
const SectionWrapper = styled.div<Props>`
  background-color: ${(props) =>
    props.background === "primary"
      ? props.theme.colors.background
      : props.background === "secondary"
      ? props.theme.colors.backgroundSecondary
      : props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 16px 16px;
  padding-bottom: 12px;
  padding-top: 12px;
`;

/** Exports */
export default Section;
