import React from 'react';
import CollectionItem from '../Collection-item/collection-item.component';
import './CollectionPreview.styles.scss';
const CollectionPreview = ({title, items}) => (
   <div className="collection-preview">
       <h1 className="title">{title}</h1>
       <div className="preview">
          {
              items.filter((item,indx)=> indx < 4).map((item)=> (
                 <CollectionItem key={item.id} item={item}/>
              ))
          }
       </div>
   </div>
);

export default CollectionPreview;