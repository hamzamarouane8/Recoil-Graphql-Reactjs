import React, { useState } from "react";
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';

export default () => {
    const [data, setData] = useState({ collections: SHOP_DATA });

    return (<div className='shop-page'>
        {
            (data.collections || []).map(collection => (
                <CollectionPreview key={collection.id} preview={collection} />
            ))
        }
    </div>);
}