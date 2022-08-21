import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  styled,
  Button,
  TextField,
  IconButton,
  Card,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions.js";
import Message from "../Message.js";

// Styled Components
const BackBtn = styled(Button)({
  marginLeft: "4em",
  marginBottom: "2em",
  color: "black",
});

const Divider = styled(Box)({
  maxWidth: "100%",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  margin: "1em 0",
});

const TotalStack = styled(Stack)({
  marginLeft: "auto",
  marginRight: "2em",
  gap: "1em",
  paddingBottom: "2em",
});

const CheckOutButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  padding: "1em",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: ".5px solid gray",
  },
});

//End of Styled Components

const Cart = () => {
  // Back Button
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate("/");
  };
  // End of Back Button

  // display cart items
  let { id } = useParams();
  const itemId = id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (itemId) {
      dispatch(addToCart(itemId, qty));
    }
  }, [dispatch, itemId, qty]);
  // end of display cart items

  return (
    <>
      <BackBtn startIcon={<ChevronLeftIcon />} onClick={navigateClick}>
        Go Back
      </BackBtn>
      <Box
        sx={{ maxWidth: { xs: "90%", sm: "80%", md: "70%" }, margin: "0 auto" }}
      >
        <Typography variant="h4">CART</Typography>
        {cartItems.length === 0 ? (
          <Message>You've cleared out your cart!</Message>
        ) : (
          <>
            {cartItems.map((item) => (
              // display items
              <Card
                sx={{ padding: "0 1.5em", marginBottom: "1em" }}
                key={item.id}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack
                    sx={{
                      maxHeight: { xs: "100px", lg: "200px" },
                      maxWidth: { xs: "100px", md: "100px", lg: "200px" },
                    }}
                  >
                    <img src={item.image} alt={item.name} />
                  </Stack>

                  <Stack display={{ xs: "none", md: "block", lg: "block" }}>
                    <Link to={`/item/${itemId}`}>
                      <Typography variant="h5">{item.name}</Typography>
                    </Link>
                    <Typography variant="span">by: {item.brand}</Typography>
                    <Typography variant="h6" sx={{ marginTop: "1em" }}>
                      $ {item.price}
                    </Typography>
                  </Stack>

                  <Stack direction="row" gap=".5em">
                    <Typography variant="span">Quantity</Typography>
                    <IconButton
                      onClick={() => {
                        dispatch(addToCart(item.id, --item.qty));
                      }}
                      disabled={item.qty === 1}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <TextField
                      size="small"
                      sx={{ width: "4em" }}
                      value={item.qty}
                    />

                    <IconButton
                      onClick={() => {
                        dispatch(addToCart(item.id, ++item.qty));
                      }}
                      disabled={item.qty === item.stock}
                    >
                      <AddIcon />
                    </IconButton>
                  </Stack>

                  <IconButton
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </Stack>
              </Card>
              // End of display items
            ))}
          </>
        )}

        <Divider></Divider>

        {/* Total Order */}
        <Stack>
          <TotalStack>
            <Typography variant="h6">
              Total: $
              {cartItems
                .reduce((accu, item) => accu + item.price * item.qty, 0)
                .toFixed(2)}
            </Typography>
            <Typography variant="span">
              Qty: {cartItems.reduce((accu, item) => accu + item.qty, 0)}{" "}
              Item(s)
            </Typography>
            <CheckOutButton startIcon={<AttachMoneyIcon />}>
              Check Out
            </CheckOutButton>
          </TotalStack>
        </Stack>
        {/*End Total Order */}
      </Box>
    </>
  );
};

export default Cart;
