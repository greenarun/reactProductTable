import React,{useState} from "react";

const ProductImage = (props) => {
const {images} = props
const [indexval,setIndexval]=useState(0) 


const handleNextImage = () => {
if(indexval === images.length-1) {
    setIndexval(0)
} else {
    setIndexval(indexval+1)
}
}

const handlePrevImage = () => {
    if(indexval !== 0) {
        setIndexval(indexval-1)
    }
}

return (
 <div className="product-img">
 <span className={`prev-arrow ${indexval === 0 && 'disabled'}`} onClick={handlePrevImage} title="previous image">&larr;</span>
 <img src={images[indexval]} alt={'no text'} />
 <span className={`next-arrow ${indexval === images.length-1 && 'disabled'}`} onClick={handleNextImage}  title="Next image">&rarr;</span>
</div>
)
}

export default ProductImage