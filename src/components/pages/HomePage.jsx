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
        Practitioner
        <br />
        Technologist
        <br />
        Communicator
      </StyledGridElementTitle>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(420px, 1fr));
  grid-template-rows: repeat(2, minmax(300px, 1fr));

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    grid-template-rows: repeat(2, minmax(150px, 1fr));
  }
`;

const StyledGridElementName = styled.h2`
  justify-self: flex-end;
  align-self: flex-end;
  text-align: right;
  font-size: var(--fontSize-subTitle);
  padding-right: var(--padding-s);
  @media screen and (max-width: 840px) {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

const StyledGridElementTitle = styled.h1`
  background-image: url("/images/grid-pattern.svg");
  font-size: var(--fontSize-title);
  font-weight: var(--fontWeight-title);
  animation: slidein 0.55s ease-in;
  @keyframes slidein {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @media screen and (max-width: 840px) {
    grid-row: 2 / 2;
    grid-column: 1 / 2;
    font-size: 25px;
  }
`;

const StlyedGridElementImage = styled.div`
  background-image: url("/images/portrait-image.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  animation: slidein2 0.55s ease-in;
  @keyframes slidein2 {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @media screen and (max-width: 840px) {
    grid-row: 1 / 1;
    grid-column: 2 / 2;
  }
`;
