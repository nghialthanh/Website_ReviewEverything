/*----------------------------------LIST MY REVIEW----------------------------*/
import React, {Component} from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import swal from 'sweetalert';
import { orderBy } from 'lodash';
class Reviewlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ReviewbyAcc: [],
            TP: [],
            ktrsort: 0
        }
    }
    componentDidMount() {
        let str = '/byIdAcc?id='+this.props.id;
        axios .get(str) 
              .then(response => {               
                this.setState({ ReviewbyAcc: response.data});               
              })
            .catch(err => console.log(err));

        axios .get('/TacPham') 
              .then(response => {               
                this.setState({ TP: response.data});
                
              })
            .catch(err => console.log(err));
    }
    //-----------------------Sort-----------------------------------------/
    handlesort = (value) => {
        this.setState({
            ktrsort: value
        })
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
                axios   .delete(`/review/${item}`)
                .then(res => {
                    let str = '/byIdAcc?id='+this.props.id;
                    axios .get(str) 
                        .then(response => {               
                            this.setState({ ReviewbyAcc: response.data });               
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
                swal("XÓA THÀNH CÔNG!", { icon: "success"});
            } else {
              swal("HỦY THAO TÁC THÀNH CÔNG!");
            }
          });
    }
    /*----------------------show item listMyReivew--------------------------------*/
    renderItem = () => {
        const data = this.state.ReviewbyAcc;
        return data.map((e,index) => {
            if(this.state.ktrsort==0){
                let name,date,dd,tacpham,n,tt;
                this.state.TP.forEach(tp =>{
                    tacpham=tp;
                    if (tp.ID===e.IDTP){
                        name=tp.TenPhim;
                        date=tp.NgayCC.substring(0,10);
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
                    tt='Chưa được duyệt'
                let date1 = e.NgayViet.substring(0,10);
                    return(
                        <tr>
                            <td className="text-center">
                                {index+1}
                            </td>
                            <td className="text-center">
                                {name}
                            </td>
                            <td className="text-center">
                                {date}
                            </td>
                            <td className="text-center">
                                {date1}
                            </td>
                            <td className="text-center">
                                {tt}
                            </td>
                            <td className="text-center">
                                <Link to={{
                                    pathname: '/Phim/review',
                                    state: {
                                        name: name,
                                        dd: dd,
                                        ngay: date,
                                        ListbyIDNV: tacpham
                                    }
                                }} 
                                    className="btn btn-primary btn-sm">Đọc
                                </Link>
                                <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.handleDeleteItem(e.ID)} >Xóa</button>
                            </td>
                        </tr>
                    )
            }
            if(this.state.ktrsort==e.State){
                let name,date,dd,tacpham,n,tt;
                this.state.TP.forEach(tp =>{
                    tacpham=tp;
                    if (tp.ID===e.IDTP){
                        name=tp.TenPhim;
                        date=tp.NgayCC.substring(0,10);
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
                    tt='Chưa được duyệt'
                let date1 = e.NgayViet.substring(0,10);
                    return(
                        <tr>
                            <td className="text-center">
                                {index+1}
                            </td>
                            <td className="text-center">
                                {name}
                            </td>
                            <td className="text-center">
                                {date}
                            </td>
                            <td className="text-center">
                                {date1}
                            </td>
                            <td className="text-center">
                                {tt}
                            </td>
                            <td className="text-center">
                                <Link to={n} className="btn btn-primary btn-sm" onClick={()=> this.props.handleShowBody3(name,dd,date,e.ID)}>Đọc</Link>
                                <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.handleDeleteItem(e.ID)} >Xóa</button>
                            </td>
                        </tr>
                    ) 
            }           
        });
        
    }
    render() {       
        let count = 0;
        return(
            <div className="body2">
                <div className="wrapper">
                    <h3><kbd>Danh sach Review của bạn</kbd></h3>
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
                            <li className="dropdown-menu-item" onClick={() => this.handlesort(0)}>
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
                                <th>Tên</th>
                                <th style={{ width: '15%' }}>Ngày Phát Hành</th>
                                <th style={{ width: '15%' }}>Ngày Viết</th>
                                <th style={{ width: '15%' }}>Trạng thái</th>
                                <th style={{ width: '15%' }}>Chỉnh Sửa</th>
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
export default Reviewlist;