import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Link to={`/coin/${coin.id}`}>
        <Card sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
            <CardContent sx={{ flex: "1 1 auto" }}>
              <Typography
                component="div"
                variant="button"
                sx={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {coin?.name}
              </Typography>
              <Typography variant="subtitle1" color="error" component="div">
                MarketCap: {coin?.data.market_cap}
              </Typography>
            </CardContent>
            {/* <CardActions>
          {" "}
            
          <Button variant='text' color='secondary'>Learn More</Button>
          
        </CardActions> */}
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 210, height: "auto" }}
            image={coin?.large}
            alt="404:Not Found"
          />
        </Card>
      </Link>
    </Grid>
  );
};

export default CoinCard;
