import React from 'react';
import Title from './Title';
import { services } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" subtitle="services" />
        <div className="section-center services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return <Service id={id} icon={icon} title={title} text={text} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
