import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

import Bookmark from '@/assets/images/bookmark.png';

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
  },
  likeRecipe: {
    backgroundPosition: '0% 0%',
  },
});

const CardContentHead = (props: { idRecipe: number; image: string }): JSX.Element => {
  const classes = CardStyle();
  const [like, setClickLike] = useState(() => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];
    return arrayIds.includes(props.idRecipe.toString()) ? classes.likeRecipe : '';
  });

  const clickLikeBookmark = (id: number): void => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];

    if (!arrayIds.includes(id.toString())) {
      arrayIds.push(id.toString());
      setClickLike(classes.likeRecipe);
    } else {
      arrayIds.splice(arrayIds.indexOf(id.toString()), 1);
      setClickLike('');
    }
    localStorage.setItem('likeRecipe', JSON.stringify(arrayIds));
  };

  return (
    <ButtonBase
      className={classes.media}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
      onClick={() => clickLikeBookmark(props.idRecipe)}
    >
      <span data-key={props.idRecipe} className={`${classes.bookmark} ${like}`} />
    </ButtonBase>
  );
};
export default CardContentHead;