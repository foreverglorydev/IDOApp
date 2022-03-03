import styled from "styled-components";

export const ButtonSearchGroup = styled.div`

    display:flex;
    justify-content: space-between;
    background-color: transparent;
    width: 100%;
    margin-top: 2rem;
  
  @media (max-width: 1000px) {
    flex-direction: column;
  })
`;
export const GrayButtonGroup = styled.div`
    width:800px;
    display:flex;
    background-color: transparent;
    flex-direction: row;
    justify-content:space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 16px;
    width: 100%;
  })
`;
export const GrayButton = styled.button`
   color: white;
    border: 1.5px solid #229503;
    padding: 0px 50px;
    border-radius: 10px;
    background: rgba(100,100,100,0.4);
    font-size: 18px;

  @media (max-width: 1000px) {
    min-height: 80px;
    margin-bottom: 1rem;
  })
`;

export const SearchGroup = styled.div`
    display:flex;
    border: 1px solid #61ED64;
    border-radius: 20px;
    align-items: center;
     margin-left: 1rem;
  
  @media (max-width: 1000px) {
    margin: 0 16px;
    padding: 16px 16px;
  })

`;
export const SearchInput = styled.input`
width: 100%;
padding: 4px 10px;
margin: 8px 0px 8px 10px;
background-color: transparent;
box-sizing: border-box;
border:none;
outline:none;
color:white;

`;

export const IdoGroup = styled.div`
  margin-right: 0;
  padding: 50px 32px 150px 32px;
  width:100%;
  display:grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap:50px;
  
  @media (max-width: 1000px) {
    padding: 1rem 16px  0 16px;
    grid-template-columns: 1fr;
  });

  @media (max-width: 1000px) {
  })
`;

export const ArrowGroup = styled.div`
  
    width:100%;
    
`;