import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { check, uncheck } from "../../store/checked-out/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 260,
    margin: 15,
  },
  media: {
    height: 140,
  },
});

const FoodCard = ({ food, isRemovable = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            food.name === "Maça"
              ? "https://superprix.vteximg.com.br/arquivos/ids/175207-292-292/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000"
              : food.name === "Abacaxi"
              ? "https://www.saudegarantida.com.br/blog/wp-content/uploads/2017/07/abacaxi-ananas-emagrecer-ma-digestao2.jpg"
              : food.name === "Macarrão"
              ? "https://dk84tbmd2rzwy.cloudfront.net/Custom/Content/Products/10/11/1011809_mas-inst-mosmann-21522_m1_636487572584217022.jpg"
              : food.name === "Tomate"
              ? "https://static1.conquistesuavida.com.br/ingredients/3/43/65/13/@/24692--ingredient_detail_ingredient-2.png"
              : food.name === "Bife"
              ? "https://image.freepik.com/fotos-gratis/bife-cru-em-papel-branco_144627-10267.jpg"
              : food.name === "Frango"
              ? "https://image.freepik.com/fotos-gratis/frango-cru-isolado-inteiro_78361-4222.jpg"
              : food.name === "Pepsi"
              ? "https://www.prabarbebidas.com.br/img/products/refrigerante-pepsi-lata-pack-c-12un-de-350ml_1_1200.jpg"
              : food.name === "Açucar"
              ? "https://www.pngkey.com/png/full/513-5130921_acar-cristal-2kg-arroz-cristal.png"
              : food.name === "Chocolate"
              ? "https://www.nestle.com.br/images/default-source/produtos/chocolate-crunch.png?sfvrsn=be1f912_6"
              : null
          }
          title={food.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {food.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isRemovable ? (
          <Button color="primary" onClick={() => dispatch(uncheck(food))}>
            Remover item do carrinho
          </Button>
        ) : (
          <Button color="primary" onClick={() => dispatch(check(food))}>
            Adicionar ao carrinho
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default FoodCard;
