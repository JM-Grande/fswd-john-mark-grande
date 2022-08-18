import React, { useEffect } from "react";
import { Box, Stack, styled, Typography, Rating } from "@mui/material";
import { Link } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { listItems } from "../../actions/itemActions.js";
import Message from "../Message.js";
import Loader from "../Loader.js";

//Styled Components
const StyledBox = styled(Box)({
  width: "80%",
  margin: "auto",
  height: "auto",
  paddingBottom: "2em",
});

const StackImages = styled(Stack)({
  gap: "1em",
  rowGap: "6em",
  display: "flex",
  flexWrap: "wrap",
  padding: "0 2em",
  paddingBottom: "2em",
  marginTop: "3em",
});

const StackImg = styled(Stack)({
  width: "250px",
  height: "400px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
  "&:hover": {
    color: "gray",
  },
});

const HotText = styled(Typography)({
  marginTop: "2em",
});

const ItemName = styled(Typography)({
  fontWeight: "600",
});

const ItemPrice = styled(Typography)({
  textDecoration: "line-through",
  color: "gray",
});

//End of Styled Components

const Trending = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList);
  const { isLoading, error, items } = itemList;

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <StyledBox>
          <HotText variant="h4"> Hot Items </HotText>
          <StackImages direction="row">
            {items.map((item) => (
              <StackImg key={item._id}>
                <img src={item.image} alt={item.name} loading="lazy" />

                <StyledLink to={"/Item/" + item._id}>
                  <Stack>
                    <ItemName>{item.name}</ItemName>
                    <Typography>Brand: {item.brand}</Typography>
                  </Stack>
                </StyledLink>

                <Stack direction="row" gap={1} mt={2}>
                  <Typography variant="h6">
                    {item.preSalePrice === item.price ? (
                      ""
                    ) : (
                      <ItemPrice>${item.price}</ItemPrice>
                    )}
                  </Typography>
                  <Typography variant="h6">${item.preSalePrice}</Typography>
                  <Rating
                    name="half-rating-read"
                    value={item.rating || ""}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </StackImg>
            ))}
          </StackImages>
        </StyledBox>
      )}
    </React.Fragment>
  );
};

export default Trending;
