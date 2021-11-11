import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CardInfo from '../CardInfo/CardInfo';

function Card(props) {
  let { id } = useParams();
  const items = useSelector(state => state.cardReducer.rows)
  const card = items.find((el) => el.id === id)

  return (
    <CardInfo key={card.id} id={card.id} title={card.title} vendor={card.vendor} pack={card.pack} price={card.price} /> 
  );
}

export default Card;
