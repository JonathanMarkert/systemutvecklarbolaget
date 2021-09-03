import { Product } from '../../Mockdata'
import { CSSProperties, FC } from 'react'
import { Box } from '@material-ui/core';

interface Props {
    image: Product;
}

const ProductCard: FC<Props> =({ image }) => {
    return(
        <div style={rootStyle}>
            <img
                src ={image.url}
                key={image.id}
                alt=""
              
              />
              <div>
                  <p>
                {image.name}
                </p> 
                <p>
                {image.brewery}
                </p>
                </div>             
        </div>
    )
}

const rootStyle: CSSProperties= {
    
    backgroundColor: '#342404',
    color: 'd4ccce',
    alignContent: 'space-between'
}

export default ProductCard;