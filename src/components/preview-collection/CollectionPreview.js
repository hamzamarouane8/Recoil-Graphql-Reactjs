import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collectionPreview.scss';

export default ({ preview }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{preview.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    (preview.items || []).filter((item, index) => index < 4).map(item => (
                        <CollectionItem key={item.id} collectionItem ={item} />
                    ))
                }
            </div>
        </div>
    );
}