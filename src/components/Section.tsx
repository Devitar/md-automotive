import styled from "styled-components";

type Props = {
  background?: "primary" | "secondary";
  ref?: React.MutableRefObject<HTMLDivElement | null>;
  id?: string;
};

const Section = ({
  children,
  background,
  ref,
  id,
}: React.PropsWithChildren<Props>) => {
  return (
    <SectionWrapper id={id} ref={ref} background={background}>
      {children}
    </SectionWrapper>
  );
};

/** Styles */
const SectionWrapper = styled.div<Props>`
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 25%, #919191 100%);
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 16px 16px;
  padding-bottom: 12px;
  padding-top: 12px;
  border: 2px solid #000;
`;

/** Exports */
export default Section;
