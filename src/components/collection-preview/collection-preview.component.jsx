import React from 'react'
import './collection-preview.styles.scss';

const CollectionPreview = ({title,items}) =>(
    <div className="collection-preview">
        <div className="title">
            <h1>{title.toUpperCase()}</h1>
        </div>
        <div className="preview">
            {items.map(item=>(
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;