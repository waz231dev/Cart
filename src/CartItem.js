import React from "react";
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title:'Mobile Phone',
            price:999,
            qty: 1,
            img: ''
        }
    }
    render() {
        const {title,price,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className="action-icons"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease" className="action-icons"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/565/565491.png" alt="delete" className="action-icons"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        width:110,
        height:110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;