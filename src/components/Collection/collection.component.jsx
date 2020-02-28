import React from 'react';
import SHOP_DATA from '../../pages/shop/collection.data.js';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
class Collection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
           <div className="shope-page">
              {collections.map( ({id,...otherCollections}) => (
                  <CollectionPreview key={id} {...otherCollections}></CollectionPreview>
              ))}
           </div>
        )
    }
}

export default Collection;