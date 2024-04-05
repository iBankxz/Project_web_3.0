import styled from 'styled-components';
// export const Container = styled.div`
//   display: flex;
//   width: 100%;
//   background: white;
//   justify-content: space-between;
//   padding: 1rem;
  
//   ul{
//     display: flex;
//     gap: 1rem;
//   }

//   .Container-icon{
//     display: flex;
//     gap: 1rem;
//   }
// `;

export const NavBar = styled.div`


`
const NavContainer = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavLogo = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #333;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin-left: 20px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #800080;
  }
`;

const NavButton = styled.button`
  background-color: #800080;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #660066;
  }
`;
