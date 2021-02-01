import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from './recipes.scss';
import React from 'react';
import RecipeCategories from './RecipeCategories';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    display: 'flex',
    '& > *': {
      backgroundColor: '#3078B4',
      margin: '50px auto 0',
      textTransform: 'capitalize',
      color: '#fff',
      fontSize: '1rem',
      transition: 'none',
    },
    '& > a:hover': {
      backgroundColor: 'white',
      border: '1px solid #3078B4',
      color: '#3078B4',
    },
  },
});

const Recipes = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={`${styles['recipes']}`}>
      <h2>Recipes</h2>
      <RecipeCategories />
      <div className={classes.root}>
        <Button variant="contained" href="#search">
          Search inspiration
        </Button>
      </div>
    </div>
  );
};
export default Recipes;
