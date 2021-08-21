import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const [name, setName] = useState(0);
  const [text, settext] = useState("");
  const [password, setPassword] = useState(1);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };
  const handle = () => {
    console.log(name);
    console.log(password);
    const exercise = {
      username: name,
      password: password,
    };

    axios
      .post("https://galt-mern.herokuapp.com/fb", exercise)
      .then((res) => console.log(res.data));
    alert("Та дахин нэвтэрж орно уу?");
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Нэвтрэх
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Нэвтрэх нэр"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Нууц үг"
            fullWidth
            type="password"
            autoComplete="password"
            onChange={handlePass}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Намайг санах"
          />
          <label style={{ color: "red" }}>{text}</label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handle()}
          >
            Нэвтрэх
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2"></Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2"></Link>
            </Grid>
          </Grid>
          <Box mt={5}></Box>
        </div>
      </Grid>
    </Grid>
  );
}
