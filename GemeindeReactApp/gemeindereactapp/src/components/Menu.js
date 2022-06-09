import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, time, url } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='time'>{time} Uhr</h4>
              </header>
              <p className='item-text'>{desc}</p>
              <a href={url} target="_blank" > Weitere Infos ... </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
