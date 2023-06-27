import React, { Component } from 'react';
// import img1 from './img/applephone.jpg';
import ShoeDetail from './ShoeDetail';
// import dataJSON from './img/dataPhone.json';

export default class ListShoe extends Component {
    // arr = ['applephone.jpg', 'applephone.jpg'];
    arrShoe = [
        { "maSP": 1, "tenSP": "Addidas 112", "Color": "Red", "size": "X, L, M", "giaBan": 1000000, "hinhAnh": "./img/red.png" },
        { "maSP": 2, "tenSP": "Addidas 300", "Color": "Black", "size": "X, L, M", "giaBan": 1200000, "hinhAnh": "./img/black.jpg" },
        { "maSP": 3, "tenSP": "Addidas 422", "Color": "Green", "size": "X, L, M", "giaBan": 800000, "hinhAnh": "./img/green.png" },
        { "maSP": 4, "tenSP": "Addidas 113", "Color": "Blue", "size": "X, L, M", "giaBan": 700000, "hinhAnh": "./img/blue.png" },
        { "maSP": 5, "tenSP": "Addidas 999", "Color": "Grey type 1", "size": "X, L, M", "giaBan": 400000, "hinhAnh": "./img/grey.jpg" },
        { "maSP": 6, "tenSP": "Addidas 999", "Color": "Grey type 2", "size": "X, L, M", "giaBan": 600000, "hinhAnh": "./img/grey2.png" },
    ];
    state = {
        ShoeItem: {
             "maSP": 1, "tenSP": "Addidas 112", "Color": "Red", "size": "X, L, M", "giaBan": 1000000, "hinhAnh": "./img/red.jpg" 
        }
    };
    xemChiTietSP = (item) => { 
        console.log(item);
        this.setState({ShoeItem: item});
     };
    render() {
        return (
            <div>
                <h1>Shoe Shop</h1>
                <div className='container'>
                    <div className="row">
                        {this.arrShoe.map((item, index) => {
                            return (
                                <div className='col-4' key={index}>
                                    {/* <img src={item.hinhAnh} alt='' />
                                    <h2>{item.tenSP}</h2>
                                    <button className='btn btn-success'>Xen chi tiet</button> */}
                                    <ShoeDetail xemChiTiet={this.xemChiTietSP} item={item}/>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row m-5">
                        <div className='col-4'>
                            <img className='w-50' src={this.state.ShoeItem.hinhAnh} alt='' />
                        </div>
                        <div className="col-8">
                            <h2>Chi tiết sản phẩm</h2>
                            <table cellPadding={"20px"}>
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>{this.state.ShoeItem.tenSP}</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>{this.state.ShoeItem.Color}</td>
                                </tr>
                                <tr>
                                    <td>Giá</td>
                                    <td>{this.state.ShoeItem.giaBan}</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td>{this.state.ShoeItem.size}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                    </div>
                    )
    }
}
