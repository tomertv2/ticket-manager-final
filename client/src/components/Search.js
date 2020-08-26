import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();

  return (
    <span
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <InputBase
        placeholder="Search…"
        id="searchInput"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => props.filterOnChangeFunc(e.target.value)}
      />
    </span>
  );
}
