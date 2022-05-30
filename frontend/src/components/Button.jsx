import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'><i className="fa-regular fa-cicle-plus" /> Submit Ad</button>
    </Link>
  );
}