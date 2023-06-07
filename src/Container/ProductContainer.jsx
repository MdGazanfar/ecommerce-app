import React, { Component } from 'react'
import Products from '../Components/Products'

const SCREEN = {
    LIST: "LIST",
    DETAILS: "DETAILS",
}

export class ProductContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentScreen: SCREEN.LIST,
        };
    }

    handleScreensChange = (data) => {
        if (data === "DETAILS") {
            this.setState({ currentScreen: SCREEN.DETAILS })
        }
        if (data === "LIST") {
            this.setState({ currentScreen: SCREEN.LIST })
        }
    }


    render() {
        return (
            <>
                <div className='prod-title'>
                    Products
                </div>
                <Products
                    currentScreen={this.state.currentScreen}
                    handleScreens={this.handleScreensChange}
                />
            </>
        )
    }
}

export default ProductContainer