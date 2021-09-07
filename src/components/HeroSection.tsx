import { Box, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

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
          Beer for Developers
          <Typography className={classes.breadText} variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            provident accusamus rem neque ipsa esse aliquid numquam eligendi
            libero corrupti.
          </Typography>
        </Typography>
        <Box className={classes.visualIndicator}>
          <Typography variant="h6">SCROLL DOWN</Typography>
          <KeyboardArrowDownOutlinedIcon
            className={`${classes.iconStyle} ${classes.animatedItem} `}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
