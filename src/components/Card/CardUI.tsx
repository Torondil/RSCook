import React from 'react';
import styles from './Card.scss';
// import FilterUrl from '@/constants';

const Card = (): JSX.Element => {

  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="https://www.simplyrecipes.com/wp-content/uploads/2020/01/Lasagna-For-Two-LEAD-6-600x400.jpg" alt="Lasagna" />
      </div>
      <div className="card-body text-dark">
        <h2 className="card-title">Loaf Pan Lasagna</h2>
        <span className={styles['cook-time']}>1 hr, 5 min</span>
        <p className="card-text text-secondary">
        This small-batch weeknight lasagna comfortably serves two and is ready in half the time as a larger batch. Loaf Pan Lasagna is layered with chunky pieces of sausage and rustic-but-quick tomato sauce.
        </p>
        <button className="btn btn-success">Add</button>
        <button className="btn btn-link">YouTube video</button>
      </div>
    </div>


);
}

export default Card;
