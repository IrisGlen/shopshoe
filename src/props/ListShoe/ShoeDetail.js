import React, { Component } from 'react'

export default class ShoeDetail extends Component {
    render() {
        let {item } = this.props;
        return (
            <div>
                <img class="w-75" src={item.image} alt='' />
                <h2>{item.name}</h2>
                <button className='btn btn-success' onClick={() => {this.props.xemChiTiet(item);}}>Xem chi tiet</button>
            </div>
        )
    }
}
