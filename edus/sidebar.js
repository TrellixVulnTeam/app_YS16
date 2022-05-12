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
    textDecoration:'none'
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <MenuList>
            <MenuItem><Link to='/introReact' className={classes.line}>Intro</Link></MenuItem>
            <MenuItem><Link to='/lifeCycle' className={classes.line}>lifeCycle</Link></MenuItem>
            <MenuItem><Link to='/mainCompo' className={classes.line}>Event</Link></MenuItem>
            <MenuItem><Link to='/pureComp' className={classes.line}>PureComp</Link></MenuItem>
            <MenuItem><Link to='/async_await' className={classes.line}>Async-await</Link></MenuItem>
            <MenuItem><Link to='/contextHooks' className={classes.line}>Context Hooks</Link></MenuItem>
            <MenuItem><Link to='/customHooks' className={classes.line}>CustomHooks</Link></MenuItem>
            
            <MenuItem><Link to='/thiss' className={classes.line}>Logic</Link></MenuItem>
            <MenuItem><Link to='/numberFormats' className={classes.line}>NumberFormat</Link></MenuItem>
            
            <MenuItem><Link to='/models' className={classes.line}>Models</Link></MenuItem>
            <MenuItem><Link to='/like' className={classes.line}>Like-checkbox-radio</Link></MenuItem>
            <MenuItem><Link to='/textEditors' className={classes.line}>TextEditors</Link></MenuItem>
            <MenuItem><Link to='/sortItems' className={classes.line}>SortItems</Link></MenuItem>
            <MenuItem><Link to='/translations' className={classes.line}>Translations</Link></MenuItem>
            <MenuItem><Link to='/serverSideRend' className={classes.line}>Jwt</Link></MenuItem>
            <MenuItem><Link to='/dropdownSelect' className={classes.line}>dropdownSelect</Link></MenuItem>
            <MenuItem><Link to='/shoppingCard' className={classes.line}>ShoppingCard</Link></MenuItem>
          </MenuList>
        <div>
      </div>
    </div>
  );
}

  