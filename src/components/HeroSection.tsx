import { Box, Hidden, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme: Theme) => ({
  heroBackground: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    height: "100%",
    width: "100%",
    color: "#fff",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
    opacity: 1, // testa utan filmen
  },
  heroVideo: {
    objectFit: "contain",
  },
  iconStyle: {
    fontSize: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headLine: {
    fontWeight: 500,
    letterSpacing: "2px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  breadText: {
    paddingTop:"3rem",
    textAlign: "center",
    maxWidth: "600px",
    letterSpacing: "2px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
    animationIterationCount: "infinite",
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-25%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  visualIndicator: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroBackground}>
      <Box className={classes.videoContainer}>
        <video className={classes.heroVideo} autoPlay loop muted playsInline>
          <source
            type="video/mp4"
            src="https://www.carlsberg.com/media/3214/carlsberg-pilsner-beer-closeup-video.mp4"
          />
        </video>
      </Box>
      <Box className={classes.heroContainer}>
        <Typography className={classes.headLine} variant="h1">
          <Hidden only={["xs", "sm"]}>Beer for Developers</Hidden>
          <Hidden only={["md", "lg", "xl"]}>
            Beer <FavoriteIcon style={{ fontSize: 40 }} />{" "}
          </Hidden>
          <Hidden only="xs">
            <Typography className={classes.breadText} variant="h5">
              What is cooler than coding-themed beer? Null,
              I say! We have already messed with your meddlesome government so
              you don't have to worry about taxes or such. Just treat this site
              as middleware and import the whole module!
            </Typography>
          </Hidden>
        </Typography>
        <Hidden only={"xs"}>
          <Box className={classes.visualIndicator}>
            <Typography variant="h6">SCROLL DOWN</Typography>
            <KeyboardArrowDownOutlinedIcon
              className={`${classes.iconStyle} ${classes.animatedItem} `}
            />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default HeroSection;
