import React, { useState } from 'react'
import s22 from '../Images/s22.jpg'
import iphone_13_pro from '../Images/iphone_13_pro.jpg'
import iphone_13 from '../Images/iphone_13.jpg'
import nothing from '../Images/nothing.png'
import oneplus from '../Images/oneplus.jpg'
import pixel from '../Images/pixel.jpg'
import s22_ultra from '../Images/s22_ulta.jpg'
import add from '../Images/add-icon.png'
import remove from '../Images/remove-icon.png'

const productList = [
    {
        name: "Samsung S22",
        id: 1,
        url: s22,
        price: "54,000"
    },
    {
        name: "Samsung S22 Ultra",
        id: 2,
        url: s22_ultra,
        price: "1.54,000"
    },
    {
        name: "Google Pixel 7",
        id: 3,
        url: pixel,
        price: "57,000"
    },
    {
        name: "Oneplus 10",
        id: 4,
        url: oneplus,
        price: "39,000"
    },
    {
        name: "Nothing Phone 1",
        id: 5,
        url: nothing,
        price: "34,000"
    },
    {
        name: "Iphone 13 Pro",
        id: 6,
        url: iphone_13_pro,
        price: "1,99,000"
    },
    {
        name: "Iphone 13",
        id: 7,
        url: iphone_13,
        price: "59,000"
    },
]

const Products = (props) => {

    const { handleScreens, currentScreen } = props

    const [productDetail, setProductDetail] = useState(null)
    const [quantity, setQuantity] = useState(0)

    const handleDetailsPage = (data) => {
        let details = productList.filter(d => d.id === data)
        setProductDetail(details[0])
        handleScreens("DETAILS")
    }

    const handleBreadcrumb = () => {
        handleScreens("LIST")
        setQuantity(0)
    }

    const handleQuantity = (data) => {
        if (data === "REMOVE") {
            if (quantity <= 0) {
                return null
            }
            setQuantity(quantity - 1)
        }
        if (data === "ADD") {
            setQuantity(quantity + 1)
        }
    }


    return (
        <>
            {/* Product List */}
            {
                currentScreen === "LIST" ?
                    <div className='list-container'>
                        {
                            productList.map((data) => {
                                return (
                                    <div className='list-card' onClick={() => handleDetailsPage(data.id)}>
                                        <div style={{ marginTop: "10px" }}>
                                            <img src={data.url} width={200} alt="List" />
                                        </div>
                                        <div style={{ fontSize: "20px", fontWeight: 500 }}>{data.name}</div>
                                        <div style={{ fontSize: "15px", marginBottom: "5px" }}>Price: {data.price}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : null
            }
            {/* Product Details */}
            {
                currentScreen === "DETAILS" ?
                    <>
                        <div className='breadcrumb'>
                            <div className='link' style={{ cursor: "pointer" }} onClick={() => handleBreadcrumb()}>Products</div>
                            <div>{`>`}</div>
                            <div style={{ color: "#598baf" }}>{productDetail.name}</div>
                        </div>
                        <div className='details-container'>
                            <div className='web'>
                                <img className='detail-image' width={250} src={productDetail.url} alt="Details" />
                            </div>
                            <div>
                                <div style={{ fontSize: "25px", fontWeight: 500, marginBottom: "10px" }}>{productDetail.name}</div>
                                <div style={{ fontSize: "18px", fontWeight: 500, marginBottom: "10px" }}>Price: {productDetail.price}</div>
                                <div style={{ display: "flex", gap: "1rem", fontSize: "18px", fontWeight: 500, marginBottom: "10px" }}>
                                    Quantity:
                                    <div className='quantity-container' >
                                        <div style={{ marginTop: "2px", cursor: "pointer" }} onClick={() => handleQuantity("REMOVE")}>
                                            <img src={remove} width={20} alt="remove" />
                                        </div>
                                        <div>{quantity}</div>
                                        <div style={{ marginTop: "2px", cursor: "pointer" }} onClick={() => handleQuantity("ADD")}>
                                            <img src={add} width={20} alt="add" />
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => alert(`${productDetail.name} added to cart`)} className='cart-btn'>Add to Cart</div>
                            </div>
                        </div>
                    </>
                    : null
            }
        </>
    )
}

export default Products