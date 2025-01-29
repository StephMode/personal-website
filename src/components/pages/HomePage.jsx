import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledGridContainer>
      <StyledGridElementName>
        Stephan
        <br /> Model
      </StyledGridElementName>

      <StlyedGridElementImage />

      <StyledGridElementTitle>
        Web
        <br /> Developer
      </StyledGridElementTitle>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(420px, 1fr));
  grid-template-rows: repeat(2, minmax(300px, 1fr));

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
    grid-template-rows: repeat(3, minmax(300px, 1fr));
  }
`;

const StyledGridElementName = styled.h2`
  justify-self: flex-end;
  align-self: flex-end;
  text-align: right;
  font-size: var(--fontSize-subTitle);
  margin: 0;
  padding-right: var(--padding-s);
`;

const StyledGridElementTitle = styled.h1`
  background-image: url("/images/grid-pattern.svg");
  font-size: var(--fontSize-title);
  font-weight: var(--fontWeight-title);
  margin: 0;
  animation: slidein 0.55s ease-in;
  @keyframes slidein {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const StlyedGridElementImage = styled.div`
  background-image: url("/images/portrait-image.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
  animation: slidein2 0.55s ease-in;
  @keyframes slidein2 {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
