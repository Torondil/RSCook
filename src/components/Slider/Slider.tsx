import React from 'react';
// import img from '../imgdirrectory' подключить красиво картинки
import { Carousel } from 'react-bootstrap';

const Slider = (): JSX.Element => {
  return (
     <Carousel>
       <Carousel.Item style={{'height': '400px'}}>
        <img
          className="d-block w-100"
          src="https://www.simplyrecipes.com/wp-content/uploads/2020/02/Roasted-Red-Pepper-Hummus-LEAD-2-600x400.jpg"
          alt="Lasagna"
        />
        <Carousel.Caption>
          <h3>Recipe Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item style={{'height': '400px'}}>
        <img
          className="d-block w-100"
          src="https://www.simplyrecipes.com/wp-content/uploads/2019/02/Chicken-Tortilla-Soup-LEAD-4-600x400.jpg"
          alt="Lasagna"
        />
        <Carousel.Caption>
          <h3>Recipe Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item style={{'height': '400px'}}>
        <img
          className="d-block w-100"
          src="https://www.simplyrecipes.com/wp-content/uploads/2020/01/Lasagna-For-Two-LEAD-6-600x400.jpg"
          alt="Lasagna"
        />
        <Carousel.Caption>
          <h3>Recipe Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, iste delectus temporibus minus quia dolorum minima quidem earum alias?</p>
        </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
  );
}

export default Slider;
