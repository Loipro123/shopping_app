import React from 'react';
import './collection-item.styles.scss';
import CustomBtn from '../Custom-Button/customBtn.component';
import {addItems} from '../../Redux/cart/cart.action';
import {connect} from 'react-redux';
const CollectionItem = ({item,addItems}) => {
  const {imageUrl,name,price} = item
  return (
  <div className="collection-item">
     <div className="image" style={{
         backgroundImage: `url(${imageUrl})`
     }}></div>
     <div className="collection-footer">
         <span className="name">{name}</span>
         <span className="price">${price}</span>
     </div>
     <CustomBtn inverted onClick={()=> addItems(item)}>ADD ITEM</CustomBtn>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItems(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);