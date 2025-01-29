import styled from "styled-components";

export default function AboutPage() {
  return (
    <StyledGridContainer>
      <StyledGridElement>
        <StyledGridParagraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugit
          quae aperiam nostrum, porro enim commodi accusantium provident
          sapiente. Aspernatur ut rem excepturi sit nihil. Voluptas repudiandae
          odit corporis libero.
        </StyledGridParagraph>
      </StyledGridElement>
      <StyledGridElement>
        <h2>Skills</h2>
      </StyledGridElement>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-template-rows: repeat(1, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
`;

const StyledGridElement = styled.div`
  justify-self: center;
  text-align: center;
  margin: 0;
  max-width: 400px;
`;

const StyledGridParagraph = styled.p`
  justify-self: center;
  align-self: center;
  text-align: justify;
  margin: 0;
  display: block;
  width: 100%;
  max-width: inherit;
  word-wrap: break-word;
`;
