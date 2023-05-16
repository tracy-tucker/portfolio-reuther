import React from 'react';
import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />
        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, image, date, title, info, location, duration, cost } =
              tour;
            return (
              <Tour
                id={id}
                image={image}
                dat={date}
                title={title}
                info={info}
                location={location}
                duration={duration}
                cost={cost}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
