import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  line: {
    textDecoration: 'none'
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuList>
        <MenuItem><Link to='/introAlgo' className={classes.line}>Deadlock</Link></MenuItem>
        <MenuItem><Link to='/Stack' className={classes.line}>Stack</Link></MenuItem>
        <MenuItem><Link to='/Queue' className={classes.line}>Queue</Link></MenuItem>
        <MenuItem><Link to='/linkedList' className={classes.line}>LinkedList</Link></MenuItem>
        <MenuItem><Link to='/heap' className={classes.line}>Heap</Link></MenuItem>
        <MenuItem><Link to='/graph' className={classes.line}>Graph</Link></MenuItem>
        <MenuItem><Link to='/sort' className={classes.line}>QuickSort</Link></MenuItem>
        <MenuItem><Link to='/searchAlgo' className={classes.line}>Search</Link></MenuItem>
        <MenuItem><Link to='/topTech' className={classes.line}>TopTech</Link></MenuItem>
      </MenuList>
      <div>
      </div>
    </div>
  );
}

