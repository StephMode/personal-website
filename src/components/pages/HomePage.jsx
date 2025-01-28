import styled from "styled-components";

export default function () {
  return (
    <StyledGridContainer>
      <StyledGridElementName>
        <h2>
          Stephan
          <br /> Model
        </h2>
      </StyledGridElementName>
      <div>empty</div>
      <StyledGridElementTitle>
        <h1>
          Web
          <br /> Developer
        </h1>
      </StyledGridElementTitle>
      <StlyedGridElementImage>
        {/* <img src={"./src/assets/images/portrait-image.jpeg"} width={400} /> */}
      </StlyedGridElementImage>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-template-rows: repeat(2, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
`;

const StyledGridElementName = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
  text-align: right;
`;

const StyledGridElementTitle = styled.div`
  justify-self: flex-start;
  align-self: flex-start;
  font-size: var(--fontSize-title);
  padding: var(--padding-xs);
`;

const StlyedGridElementImage = styled.div`
  background-image: url("/images/portrait-image.jpeg");
  background-size: cover;
  /* background-position: center; */
  width: 100%;
  height: 100%;
  /* min-width: 350px;
  min-height: 300px; */
`;
