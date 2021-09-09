import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../Interfaces/IProduct';
import { CartContext } from './context/CartContext';

interface Props {
    product: Product
}

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none'
    },
    cardMedia: {
        width: '100%',
        height: 200,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        height: '10rem',
        //   marginBottom: '2rem',
        textOverflow: '',
        overflow: 'hidden',
        textJustify: 'inter-word'
    },
    linkStyling: {
        textDecoration: 'none',
    },
    actionButton: {
        textDecoration: 'none',
        color: theme.palette.primary.light,
        "&:hover": {
            color: theme.palette.primary.dark,
        },
    },
}))

const ProductCard: React.FC<Props> = ({ product }) => {   //add clickable image
    const classes = useStyles();
    const {handleAddToCart} = useContext(CartContext);
    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={product.url}
                    title={product.name}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {product.name}
                    </Typography>
                    <div>
                        {product.description}
                    </div>
                </CardContent>
                <CardActions>
                   <Link className={classes.linkStyling} to={`/details/${product.id}`}> 
                    <Button className={classes.actionButton} 
                        size="small"
                        aria-label="details"
                    >
                        View
                    </Button>
                    </Link>
                    <Button className={classes.actionButton}
                        size="small"
                        onClick={() => handleAddToCart(product)}
                        aria-label="add to cart"
                    >
                        Add
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>

    )
}
export default ProductCard;

