/*----------------------------------LIST MY REVIEW----------------------------*/
import React, {Component} from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import swal from 'sweetalert';

class CensorshipReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Review: [],
            TP: [],
            acc: []
        }
    }
    componentDidMount() {
        let str = '/Review/';
        axios .get(str) 
              .then(response => {               
                this.setState({ Review: response.data });               
              })
            .catch(err => console.log(err));
        axios .get('/TacPham') 
              .then(response => {               
                    this.setState({ TP: response.data});
              })
              .catch(err => console.log(err));
        axios .get('/Account') 
              .then(response => {               
                    this.setState({ acc: response.data});
              })
              .catch(err => console.log(err));
        
    }
    //-----------------------Sort-----------------------------------------/
    handlesort = (value) => {
        
    }
    //-----------------------Duyệt review---------------------------------/
    handleAcceptReview = (item) =>{
        swal({
            title: "DUYỆT REVIEW NÀY?",
            text: "Bạn có thể xóa sau khi duyệt nếu thấy review này không phù hợp",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios   .put('/Review/up/?id='+item)
                .then(res => {
                    axios .get('/Review') 
                        .then(response => {               
                            this.setState({ Review: response.data });               
                    })
                    .catch(err => console.log(err));

                    axios .get('/TacPham') 
                        .then(response => {               
                            this.setState({ TP: response.data});
                        })
                        .catch(err => console.log(err));
                console.log(res);
                console.log(res.data);
                })
                swal("DUYỆT THÀNH CÔNG!", { icon: "success"});
            }
          });
    }
    //-----------------------Xoa review-----------------------------------/
    handleDeleteItem = (item) => {
        swal({
            title: "BẠN CÓ CHẮC MUỐN XÓA REVIEW NÀY?",
            text: "Bạn không thể hồi phục sau khi đã xóa review này",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios   .delete(`/Review/${item}`)
                .then(res => {
                    let str = '/byIdAcc?id='+this.props.id;
                    axios .get(str) 
                        .then(response => {               
                            this.setState({ ReviewbyAcc: response.data });               
                    })
                    .catch(err => console.log(err));
                console.log(res);
                console.log(res.data);
                })
                swal("XÓA THÀNH CÔNG!", { icon: "success"});
            } else {
              swal("HỦY THAO TÁC THÀNH CÔNG!");
            }
          });
    }
    /*----------------------show item list--------------------------------*/
    renderItem = () => {
        if(this.props.CV=='AD'){
            const data = this.state.Review;
            return data.map((e,index) => {
                if(e.State==2){
                    let name,dd,tacpham,n,tt,nameAcc;
                    this.state.acc.forEach(ac =>{
                        if(ac.ID==e.IDNV)
                            nameAcc=ac.username;
                    })
                    this.state.TP.forEach(tp =>{
                        tacpham=tp;
                        if (tp.ID===e.IDTP){
                            name=tp.TenPhim;
                            dd=tp.DaoDien;
                        }
                        if (tp.TheLoai==1)
                            n="/Phim/review"
                        else if (tp.TheLoai==2)
                            n="/Sach-Truyen/review"
                        else n="/Game/review";
                    }) 
                    if(e.State===1)
                        tt='Đã duyệt'
                    else
                        tt='Chưa được duyệt';
                    let date1
                    if(e.NgayViet!=null)
                        date1 = e.NgayViet.substring(0,10);
                    return(
                        <tr>
                            <td className="text-center">
                                {index+1}
                            </td>
                            <td className="text-center">
                                {nameAcc}
                            </td>
                            <td className="text-center">
                                {name}
                            </td>
                            <td className="text-center">
                                {date1}
                            </td>
                            <td className="text-center">
                                {tt}
                            </td>
                            <td className="text-center">
                                <Link to={{
                                    pathname: n,
                                    state: {
                                        name: name,
                                        dd: dd,
                                        ListbyIDNV: tacpham
                                    }
                                }} 
                                    className="btn btn-primary btn-sm">Đọc
                                </Link>
                                <button type="button" className="btn btn-success btn-sm" onClick={()=>this.handleAcceptReview(e.ID)} >Duyệt</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.handleDeleteItem(e.ID)} >Xóa</button>
                            </td>
                        </tr>
                    ) 
                }                   
            });
        }
    }
    render() {       
        let count = 0;
        return(
            <div className="body2">
                <div className="wrapper">
                    <h3><kbd>Danh sách review chưa được duyệt</kbd></h3>
                    <div className="sort dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="sort-menu">Sắp xếp</button>
                            <ul id="sort-menu" className="dropdown-menu">
                            <li className="dropdown-menu-item">
                                <a className="dropdown-menu-link" onClick={() => this.handlesort(1)}>
                                    <span>Đã duyệt</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <a className="dropdown-menu-link" onClick={() => this.handlesort(2)}>
                                    <span>Chưa duyệt</span>
                                </a>
                            </li>
                            <li role="separator" className="divider" ></li>
                            <li className="dropdown-menu-item" onClick={() => this.handlesort(3)}>
                                <a className="dropdown-menu-link">
                                    <span>Tất cả</span>
                                </a>
                            </li>
                            </ul>                     
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">STT</th>
                                <th>Tài Khoản</th>
                                <th style={{ width: '15%' }}>Tác Phẩm</th>
                                <th style={{ width: '15%' }}>Ngày Viết</th>
                                <th style={{ width: '15%' }}>Trạng thái</th>
                                <th style={{ width: '25%' }}>Chỉnh Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderItem()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
export default CensorshipReview;