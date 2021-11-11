import React from 'react';
import { useSelector } from 'react-redux';
import CardInfo from '../CardInfo/CardInfo';



function CardList(props) {
  const items = useSelector(state => state.cardReducer.rows)
  const filter = useSelector(state => state.filterReducer.filter)
  let sortPriceArray;


  if (filter === 'По возрастанию цены') {
    sortPriceArray = [...items].sort((a, b) => (b.price - a.price));
  } else {
    sortPriceArray = [...items].sort((a, b) => (a.price - b.price))
  } 


  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {sortPriceArray.map(item => <CardInfo key={item.id} id={item.id} title={item.title} vendor={item.vendor} pack={item.pack} price={item.price} />)}
    </div>
  );
}

export default CardList;
