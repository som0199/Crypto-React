import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCoinDetail } from "../store/coins/coinSlice";
import { addToCart } from "../store/cart/cartSlice";

const CoinPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { coin, isLoading, isError } = useSelector((state) => state.coins);
  // const {cart} = useSelector(state=>state.cart)
  const addProduct = (a) => {
    dispatch(addToCart(a));
  };
  useEffect(() => {
    dispatch(fetchCoinDetail(params.id));
  }, []);

  if (isLoading || !coin) {
    return (
      <Container sx={{ padding: "50px 0px" }} align="center">
        <CircularProgress color="primary" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ padding: "50px 0px" }}>
        <Typography variant="h4" color={"error"} align="center">
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "15px 0px", backgroundColor: "black" }}>
      <Card sx={{ padding: "20px" }}>
        <CardMedia image={coin?.image.large} sx={{ height: 300, width: 300 }} />
        <CardContent>
          <Typography variant="h3">{coin?.name}</Typography>
          <Typography variant="h5" gutterBottom>
            Symbol : {coin?.symbol}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Price : ${coin?.market_data.current_price.usd}
          </Typography>
          <Typography variant="body">
            Description : {coin?.description.en}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={coin?.links.homepage[0]}>
            <Button variant="contained" color="info" endIcon={<LanguageIcon />}>
              Official Website
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button
              variant="contained"
              color="success"
              endIcon={<ShoppingCartIcon />}
              sx={{ margin: "20px" }}
              onClick={() => addProduct(coin)}
            >
              Add To Cart
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CoinPage;
