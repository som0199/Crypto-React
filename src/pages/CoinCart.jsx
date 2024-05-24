import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CoinCart = () => {
  const { cart } = useSelector((state) => state.cart);

  const total = cart.reduce((p, c) => {
    return p + c.market_data.current_price.usd;
  }, 0);
  const totalAmount = total.toFixed(5);

  return (
    <Container sx={{ margin: "15px 0px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={8}>
        <Grid item sm={12} md={4}>
          <Card sx={{ marginTop: "15px", padding: "5px" }}>
            <CardContent>
              <Typography
                variant="h6"
                color={"steelblue"}
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                Total Amount{" "}
              </Typography>
              <Typography variant="h4" color={"tomato"} gutterBottom>
                ${totalAmount}
              </Typography>
              <Button variant="outlined" color="info">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={8}>
          {cart.map((coin) => (
            <CartItem key={coin.id} coin={coin} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoinCart;
