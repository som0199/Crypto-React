import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../store/cart/cartSlice";

const CartItem = ({ coin }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity((Count) => Count + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  return (
    <Card
      sx={{
        margin: "10px",
        padding: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap-reverse",
      }}
    >
      <CardContent>
        <Typography variant="h6">{coin?.name}</Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Price: ${coin?.market_data.current_price.usd}
        </Typography>
        <CardActions sx={{ margin: "5px 0px" }}>
          Qty:
          <button
            style={{
              border: "hidden",
              marginLeft: "5px",
              width: "30px",
              height: "30px",
              fontSize: "22px",
              backgroundColor: "white",
            }}
            onClick={() => handleDecrement(coin.id)}
          >
            -
          </button>
          <Typography variant="button">{quantity}</Typography>
          <button
            style={{
              border: "hidden",
              width: "30px",
              height: "30px",
              fontSize: "20px",
              backgroundColor: "white",
            }}
            onClick={() => handleIncrement(coin.id)}
          >
            +
          </button>
        </CardActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleRemove(coin.id)}
        >
          Remove
        </Button>
      </CardContent>
      <CardMedia image={coin?.image.large} sx={{ height: 130, width: 130 }} />
    </Card>
  );
};

export default CartItem;
