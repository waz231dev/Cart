import React from "react";
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Mobile Phone',
            price: 999,
            qty: 1,
            img: ''
        }
    }
    increaseQty = () => {
        // this.state.qty++;
        // console.log(this.state);

        // setState form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });

        // setState form 2
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });
    }
    decreaseQty = () => {
        this.setState((prevState)=>{
            if(prevState.qty>0){
                return{
                    qty:prevState.qty-1
                }
            }
        });
    }
    render() {
        const { title, price, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            alt="increase"
                            className="action-icons"
                            onClick= {this.increaseQty}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            alt="decrease"
                            className="action-icons"
                            onClick= {this.decreaseQty}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
                            alt="delete"
                            className="action-icons"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;