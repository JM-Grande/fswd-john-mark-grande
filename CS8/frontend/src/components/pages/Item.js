import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  styled,
  Typography,
  Rating,
  IconButton,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import items from "../../items";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// Styled Components
const BackBtn = styled(Button)({
  marginLeft: "4em",
  marginBottom: "2em",
  color: "black",
});

const StyledImage = styled(Stack)({
  maxWidth: "400px",
});

const ItemStack = styled(Stack)({
  width: "70%",
  margin: "0 auto",
});

const ItemPrice = styled(Typography)({
  textDecoration: "line-through",
  color: "gray",
});

const IconBtn = styled(IconButton)({
  border: ".2px solid gray",
  borderRadius: "unset",
});

const CartBtn = styled(Button)({
  backgroundColor: "black",
  color: "white",
  marginTop: "2em",
  padding: "1em",
  borderRadius: "30px",
  "&:hover": {
    borderColor: "black",
    backgroundColor: "white",
    color: "black",
  },
});

// End of Styled Components

const Item = () => {
  let { id } = useParams();
  const item = items.find((item) => item._id === id);
  // console.log(item);
  // Back Button
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate("/", { replace: true });
  };
  // End of Back Button

  // Counter
  const InStock = `${item.countInStock}`;
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(InStock - quantity);
  const [isAddDisabled, setAddDisabled] = useState(false);
  const [isMinusDisabled, setMinusDisabled] = useState(false);

  if (quantity === 0) {
    setQuantity(1);
    setStock(InStock - 1);
    setMinusDisabled(true);
  }

  const addCount = () => {
    setQuantity(quantity + 1);
    setStock(stock - 1);

    if (stock === 1) {
      setAddDisabled(true);
    } else if (quantity > 0) {
      setMinusDisabled(false);
    }
  };

  const minusCount = () => {
    setQuantity(quantity - 1);
    setStock(stock + 1);

    if (stock < 1) {
      setAddDisabled(false);
    }
  };
  //End of Counter

  return (
    <>
      <Box mt="2em">
        <BackBtn startIcon={<ChevronLeftIcon />} onClick={navigateClick}>
          Go Back
        </BackBtn>
        {/* Display Item */}
        <ItemStack
          direction={{ xs: "column", sm: "column", md: "row" }}
          gap="2em"
        >
          <StyledImage>
            <img src={item.image} alt={items.name} />
          </StyledImage>

          <Stack>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="span">By: {item.brand}</Typography>

            <Stack direction="row" alignItems="center" gap="1em">
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
              <Typography variant="span">
                <b>{item.numReviews}</b> Rating
              </Typography>
              <Typography variant="span">
                <b>500</b> Sold
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ marginTop: "2em", alignItems: "center" }}
            >
              <Typography variant="h4">
                {" "}
                {item.preSalePrice === item.price ? (
                  ""
                ) : (
                  <ItemPrice>${item.price}</ItemPrice>
                )}
              </Typography>
              <Typography variant="h6">${item.preSalePrice}</Typography>
            </Stack>

            <Stack sx={{ marginTop: "2em" }}>
              <Typography variant="h5">{item.description}</Typography>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Stack>
            {/* Counter */}
            <Stack direction="row" alignItems="center" gap=".5em" mt="4em">
              <IconBtn
                aria-label="minus"
                onClick={minusCount}
                size="small"
                disabled={isMinusDisabled}
              >
                <RemoveIcon />
              </IconBtn>

              <Button
                sx={{
                  border: ".5px solid gray",
                  color: "black",
                }}
              >
                <Typography variant="span">{quantity}</Typography>
              </Button>

              <IconBtn
                aria-label="plus"
                onClick={addCount}
                size="small"
                disabled={isAddDisabled}
              >
                <AddIcon />
              </IconBtn>
            </Stack>

            <Stack mt="1em">
              {stock === 0 ? (
                <Typography variant="span">{stock} Out of Stock</Typography>
              ) : (
                <Typography variant="span">{stock} piece available</Typography>
              )}
            </Stack>
            {/*End of Counter */}

            <Box>
              <CartBtn variant="outlined" size="large" width="20px">
                Add to Cart
              </CartBtn>
            </Box>
          </Stack>
        </ItemStack>
        {/*End of Display Item */}
      </Box>
    </>
  );
};

export default Item;
