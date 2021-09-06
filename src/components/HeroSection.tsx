import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";

const useStyles = makeStyles((theme: Theme) => ({
  heroBackground: {
    padding: theme.spacing(2),

    width: "100%",
  },
  logoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroContainer: {
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
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
    <div className={classes.heroBackground}>
      <div className={classes.videoContainer}>
        <video className={classes.heroVideo} autoPlay loop muted playsInline>
          <source
            type="video/mp4"
            src="https://www.carlsberg.com/media/3214/carlsberg-pilsner-beer-closeup-video.mp4"
          />
        </video>
      </div>
      <div className={classes.heroContainer}>
        <div className={classes.logoStyle}>
          <img
            style={{ width: "15%" }}
            src="https://nerdbrewing.files.wordpress.com/2015/04/nerdbrewing_logo_black.png"
            alt=""
          />
        </div>
        <h1 className={classes.headLine}>Beer for Nerds</h1>
        <h2 className={classes.breadText}>
          Beer for nerds2 made from overuse of throw expections bla bla bla bla
          bla
        </h2>
        <div className={classes.visualIndicator}>
          <p>SCROLL DOWN</p>
          <ArrowDownwardRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
