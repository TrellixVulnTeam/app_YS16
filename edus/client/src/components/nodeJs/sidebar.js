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
        <MenuItem><Link to='/introNodejs' className={classes.line}>Intro</Link></MenuItem>
        <MenuItem><Link to='/buffers' className={classes.line}>Buffer</Link></MenuItem>
        <MenuItem><Link to='/childs' className={classes.line}>Child Process-fork()-exec()</Link></MenuItem>
        <MenuItem><Link to='/tut_1' className={classes.line}>Callback</Link></MenuItem>
        <MenuItem><Link to='/filSystems' className={classes.line}>File System</Link></MenuItem>
        <MenuItem><Link to='/evtNode' className={classes.line}>EvtEmter-Capture data</Link></MenuItem>
        <MenuItem><Link to='/codes' className={classes.line}>Codes</Link></MenuItem>
        <MenuItem><Link to='/serverSide' className={classes.line}>Server Side</Link></MenuItem>


        <MenuItem><Link to='/tut_2' className={classes.line}>Geocode-Upload</Link></MenuItem>
        <MenuItem><Link to='/tut_6' className={classes.line}>Chat</Link></MenuItem>
        <MenuItem><Link to='/udemy' className={classes.line}>Udemy</Link></MenuItem>
        <MenuItem><Link to='/ejsNode' className={classes.line}>EJS</Link></MenuItem>
        <MenuItem><Link to='/authentications' className={classes.line}>SignUp</Link></MenuItem>
      </MenuList>
      <div>
      </div>
    </div>
  );
}
