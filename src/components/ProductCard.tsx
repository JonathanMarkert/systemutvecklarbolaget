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
import { Product } from '../Mockdata';
import { ProductContext } from './context/ProductContext';

interface Props {
    product: Product
    
    
}

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey',
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
    detailsButton: {
        color: "#7c3f04",
        "&:hover": {
            color: "#f46f04",
        },
    },
    addToCartButton: {
        color: "#7c3f04",
        "&:hover": {
            color: "#f46f04",
        },
    }
}))

const ProductCard: React.FC<Props> = ({ product }) => {   //add clickable image
    const classes = useStyles();
    const {handleAddToCart} = useContext(ProductContext);
    return (
        <React.Fragment>
            {/* {products.map((product) => ( */}
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
                   <Link to={`/details/${product.id}`} > 
                    <Button className={classes.detailsButton} aria-label="details">
                        View
                    </Button>
                    </Link>
                    <Button className={classes.addToCartButton}
                        size="small"
                        color="primary"
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

