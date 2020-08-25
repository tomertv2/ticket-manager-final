import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        <span className={classes.root} noValidate autoComplete="off">
            <TextField id="searchInput" label="Search..." onChange={e => props.filterOnChangeFunc(e.target.value)} />
        </span>
    );
}
