import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { VariantType, useSnackbar } from "notistack";

import { shoppingCartState } from "atoms";
import { useRecoilState } from "recoil";

import { BookProps } from "const";
import { currencyFormat } from "lib/utils";

export default function BasicCard(props: BookProps) {
  const { id, title, type, price, averageRating, authors, ratings, stock } =
    props;
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);

  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar(`"${title}" was successfully added.`, {
      variant: "success",
    });
  };

  const addItem = () => {
    setShoppingCart((oldShoppingCart) => {
      const existingItem = oldShoppingCart.find((i) => i.id === id);
      if (existingItem) {
        if (existingItem.quantity >= stock) {
          enqueueSnackbar(`Out of stock!`, { variant: "error" });
          return [...oldShoppingCart];
        }
        const newItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        enqueueSnackbar(`"${title}" was successfully added.`, {
          variant: "success",
        });
        return [...oldShoppingCart.filter((i) => i.id !== id), newItem];
      }
      enqueueSnackbar(`"${title}" was successfully added.`, {
        variant: "success",
      });
      return [
        ...oldShoppingCart,
        {
          ...props,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <Card sx={{ width: 256 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/seed/${id}/200/300`}
        alt={title}
      />
      <CardContent>
        {type && (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {type}
          </Typography>
        )}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {authors.map((author) => author.author.name).join(`, `)}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Rating
            name="read-only"
            precision={0.5}
            value={averageRating}
            size="small"
            readOnly
          />
          <Typography component="div" variant="body2" sx={{ color: "#616161" }}>
            {ratings}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to cart"
          disabled={stock <= 0}
          onClick={() => {
            addItem();
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{ marginLeft: "auto", marginRight: "8px" }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ paddingRight: 0.5 }}
          >
            $
          </Typography>
          {currencyFormat(price)}
        </Typography>
      </CardActions>
    </Card>
  );
}
