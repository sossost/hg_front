import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const InstagramGallery = () => {
  return (
    <Container>
      <Grid>
        <Image src="123.jpeg" alt="Image 1" />
        <Image src="123.jpeg" alt="Image 2" />
      </Grid>
    </Container>
  );
};
