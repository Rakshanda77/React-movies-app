import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MovieCategory from './MovieCategory'
import TvCategory from './TvCategory'
import TvRow from './TvRow';
import MovieRow from './MovieRow';
import SearchCategory from './SearchCategory'

function TabPanel(props) {
  const { children, value, index,  } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
 
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    marginLeft:'16rem',
    marginRight:'7rem',
    marginTop:'4rem',
    
    borderColor:'#00000',
    borderStyle:'solid',
},
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
         >
          <Tab label="Movies"/>
          <Tab label="Search Results"/>
          <Tab label="Tv Shows"/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
      
          <MovieCategory/>
          
          
          </TabPanel>

        <TabPanel value={value} index={1}>
          <h3>Please Enter A Search</h3>
          <SearchCategory />
          </TabPanel>

        <TabPanel value={value} index={2}>
         
         <TvCategory/>
          
         
          <TvRow/>
        </TabPanel>
  

      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        
        </TabPanel>
        
        <TabPanel value={value} index={1} dir={theme.direction}>
          
        </TabPanel>
        
        <TabPanel value={value} index={2} dir={theme.direction}>
          
          </TabPanel>
      </SwipeableViews> */}
    </div>
   
  );
}


