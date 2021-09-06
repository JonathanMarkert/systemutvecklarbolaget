import { Box, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";

const useStyles = makeStyles((theme: Theme) => ({
  heroBackground: {
    padding: theme.spacing(0),
    width: "100%",
  },
  logoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroContainer: {
    //display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  headLine: {
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
  visualIndicator: {
    textAlign: "center",
  },
  videoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  heroVideo: {
    objectFit: "contain",
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
        <Box className={classes.logoStyle}>
          <img
            style={{ width: "10%" }}
            src="https://nerdbrewing.files.wordpress.com/2015/04/nerdbrewing_logo_black.png"
            alt=""
          />
        </Box>
        <Typography className={classes.headLine} variant="h1">Beer for Nerds</Typography>
        <Typography className={classes.breadText} variant="body1">
          Beer for nerds2 made from overuse of throw expections bla bla bla bla
          bla
        </Typography>
        <Box className={classes.visualIndicator}>
          <Typography variant="h5">SCROLL DOWN</Typography>
          <ArrowDownwardRoundedIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
