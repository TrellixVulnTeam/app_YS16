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
        <MenuItem><Link to='/infoMD' className={classes.line}>IntroMD</Link></MenuItem>
        <MenuItem><Link to='/mongoCurd' className={classes.line}>MongoCurd</Link></MenuItem>
        <MenuItem><Link to='/mysqlCurd' className={classes.line}>MysqlCurd</Link></MenuItem>
        <MenuItem><Link to='/intro' className={classes.line}>Queries</Link></MenuItem>
        <MenuItem><Link to='/curdOp' className={classes.line}>CurdOp</Link></MenuItem>
        <MenuItem><Link to='/bulkRight' className={classes.line}>BulkWright</Link></MenuItem>
        <MenuItem><Link to='/mongodbMethods' className={classes.line}>mongodbMethods</Link></MenuItem>
        <MenuItem><Link to='/gridFs' className={classes.line}>gridFs</Link></MenuItem>
        <MenuItem><Link to='/mysql' className={classes.line}>Mysql</Link></MenuItem>
        <MenuItem><Link to='/postgressql' className={classes.line}>PostgreSql</Link></MenuItem>
      </MenuList>
      <div>
      </div>
    </div>
  );
}
