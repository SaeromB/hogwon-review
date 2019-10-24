import styled from 'styled-components';

export const Header = styled.header`
  background: #F2C94C;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 6rem;
  padding: 1rem;
  justify-content: space-between;
  margin: 0;

  @media only screen and (min-width: 960px){
    max-width: 19rem;
    margin: 0;
    padding: 0 auto;
  }
`;

export const SchoolLogo = styled.div`
  img {
    width: 3.4rem;
    align-content: left;
    display: inline-block;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  
  @media screen and (min-width: 700px) {
    flex: 1;
  }
`
export const DoubleColumn = styled.div`
  flex: 2;

  @media screen and (min-width: 700px) {
    flex: 2;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const Title = styled.p`
  vertical-align: left;
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  text-decoration: unset;
  text-align: left;

`



