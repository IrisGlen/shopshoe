import React, { Component } from 'react'

export default class ShoeDetail extends Component {
    render() {
        let {item } = this.props;
        return (
            <div>
                <img src={item.hinhAnh} alt='' />
                <h2>{item.tenSP}</h2>
                <button className='btn btn-success' onClick={() => {this.props.xemChiTiet(item);}}>Xem chi tiet</button>
            </div>
        )
    }
}
