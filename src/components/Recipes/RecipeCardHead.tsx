import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  Button,
  CardMedia,
  ButtonBase
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';

import { TransitionProps } from '@material-ui/core/transitions';
import StarIcon from '@material-ui/icons/Star';
import Bookmark from '@/assets/images/bookmark.png';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CardStyle = makeStyles({
  media: {
    height: 180,
    width: 260,
    borderRadius: '15px 15px 0 0',
  },
  bookmark: {
    width: '30px',
    height: '30px',
    backgroundImage: `url(${Bookmark})`,
    backgroundPosition: '-100% 0%',
    position: 'absolute',
    top: '15px',
    left: '15px',
    cursor: 'pointer',
  },
  likeRecipe: {
    backgroundPosition: '0% 0%',
  },
  dialog: {
    '& > * > *' : {
       border: '1px solid #3078B4',
    },
    '& > * > * > #modal-dialog-title' : {
      padding: '10px 24px',
      marginBottom: '10px',
      backgroundColor: '#3078B4',
   },
   '& > * > * > * h2' : {
    textAlign: 'left',
    color: '#fff',
   },
  },
  addBtn : {
    border: '1px solid #3078B4 !important',
    color: '#3078B4',
    textTransform: 'capitalize',
    padding: '3px 8px',
  },  
  cancelBtn : {
    border: '1px solid #3078B4 !important',
    color: '#3078B4',
    textTransform: 'capitalize',
    padding: '3px 8px',
  },
});

const CardContentHead = (props: { idRecipe: number; image: string }): JSX.Element => {
  const classes = CardStyle();
    const [open, setOpenDialog] = useState(false);
  const [like, setClassLike] = useState(() => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];
    return arrayIds.includes(props.idRecipe.toString()) ? classes.likeRecipe : '';
  });
 
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDialog = () => {
    if (like) {
      clickLikeBookmark(props.idRecipe);
    } else {
      setOpenDialog(true);
    }  
  };

  const clickLikeBookmark = (id: number): void => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];

    if (!arrayIds.includes(id.toString())) {
      arrayIds.push(id.toString());
      setClassLike(classes.likeRecipe);
    } else {
      arrayIds.splice(arrayIds.indexOf(id.toString()), 1);
      setClassLike('');
    }
    localStorage.setItem('likeRecipe', JSON.stringify(arrayIds));
    setOpenDialog(false);
  };

  return (
    <div>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Image of recipe"
      />
      <span onClick={handleDialog} data-key={props.idRecipe} className={`${classes.bookmark} ${like}`} />

    <Dialog className={classes.dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="modal-dialog-title"
      >
        <DialogTitle id="modal-dialog-title">{"Add a Favorite?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add this recipe as a favorite. To access to favorites, visit the your Profile.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.addBtn} onClick={() => clickLikeBookmark(props.idRecipe)} color="primary">
              <StarIcon style={{ color: '#3078B4', fontSize: 20 }} />Add
          </Button>
          <Button className={classes.cancelBtn} onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CardContentHead;