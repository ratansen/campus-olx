import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai'

export default function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'><AiOutlinePlusCircle className='bi-plus' /> Submit Ad</button>
    </Link>
  );
}