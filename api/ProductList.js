import styled from "styled-components";
import Products from "./Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  color:white;
  font-style: italic;
  text-align: center;
  font-size: 1.5em;

`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  color:white;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 5px;
  background-color: rgba(255, 254, 186, 0.9);
  border-radius: 5px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    
    <Container>
      <Title>Jewelry is a tangible expression of love, one that
         speaks even when words falter.</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Categorie
            </Option>
            <Option>Bracelet</Option>
            <Option>Ring</Option>
            <Option>Necklace</Option>
            <Option>Watch</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Material
            </Option>
            <Option>Gold</Option>
            <Option>Silver</Option>
            <Option>Platinum</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
