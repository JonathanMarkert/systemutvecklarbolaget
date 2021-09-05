import { Product, products } from '../Mockdata'
import { CSSProperties, FC } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

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
}))

const ProductCard: React.FC<Props> = ({ product }) => {
    const classes = useStyles();
    // const product = products.find((p) => p.id);
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
                    <Button className={classes.detailsButton}>
                        View
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>

    )
}
export default ProductCard;

