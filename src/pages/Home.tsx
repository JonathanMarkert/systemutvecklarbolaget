
import { CSSProperties } from "@material-ui/styles";
import ProductCard from "../components/common/ProductCard";
import { products } from "../Mockdata";

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

//detta ska lyftas in i tema eller css
  background: {
    backgroundColor: 'black',
  },
  cardGrid: {
    backgroundColor: 'black',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
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

}));

const cards = products;

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main className={classes.background}>
        <Container className={classes.cardGrid} maxWidth="md">
       
          <Grid container spacing={4}>
      
            {products.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}               
                    image={card.url}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {card.name}
                    </Typography>
                    <div>
                    {card.description}
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.detailsButton}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}

    </React.Fragment>
  );
}

// export default function Home() {

//   return (
//     <>
//       <section>
//         <div>
//           <div style={gridStyle}>
//             {products.map(image => <ProductCard key = {image.id} image = {image}/>)}
//           <div style={cardStyle}>
//             <div>
//               image
//             </div>
//             <div>
//                 Text på kortet
//             </div>
//                 också text
//           </div>
//         </div>
//      </div>
//       </section>
//     </>
//   );
// };

// const gridStyle: CSSProperties = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     boxSizing :'border-box' 
// }

// const cardStyle: CSSProperties = {
//   padding: '16px', 
//   borderSpacing: '2rem', 
  
// If background img
/* <img
src="https://assets.hypefactors.com/stories/scaled/large/HYeRy9xZVCkDJRKXopAZxxpNZL2juKP1Cxi1xxm8.png"
alt="" 
/>*/


// const useStyles = makeStyles(() =>
//   createStyles({
//     root: {
//       display: "flex",
      
//     },
//   })
// );

//add this for admins under cardAction
//<Button size="small" color="primary">
//Edit
//</Button>