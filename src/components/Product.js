import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components";
import Card from 'react-bootstrap/Card';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #FFFEBA;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
<Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={item.img} 
      style={{ objectFit: 'cover', height: '250px' }} 
      />
      <Info>
        <Icon>
          <ShoppingBagOutlinedIcon />
        </Icon>
        <Icon>
          < SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
      </Card>
    </Container>
  );
};

export default Product;
