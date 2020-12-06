import React, {Component} from 'react';
import axios from 'axios';
import table from 'react-bootstrap';

import Reviewchild from './Reviewchild';
class Listreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TacPham: []
        }
    }
    componentDidMount() {
        axios .get('/TacPham') 
              .then(response => {               
                this.setState({ TacPham: response.data});
                
              })
            .catch(err => console.log(err));
    }
    renderItem = () => {
        let count = 0;
        const data = this.state.TacPham;
        return data.map(TacPham => {
            count++;
            let str = TacPham.NgayCC.substring(0,10);
            if (TacPham.TheLoai == this.props.stateBody)
                return (
                    <Reviewchild
                        key={TacPham.ID}
                        id={TacPham.ID}
                        number={count}
                        name={TacPham.TenPhim}
                        dateCC={str}
                        DD={TacPham.DaoDien}
                        stateBody={this.props.stateBody}
                        handleShowBody3={this.props.handleShowBody3}
                    />
                );
        });
        
    }
    render() {     
        let n;
        if (this.props.stateBody===1)
            n="Đạo diễn"
        else if (this.props.stateBody===2)
            n="Tác giả"
        else n="Nhà Phát Hành"  
        return(
            <div className="wrapper1">
                <span>Danh sach nhiều lượt review</span>
                <table className="table table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th style={{ width: '5%' }} className="text-center">STT</th>
                            <th>Tên</th>
                            <th style={{ width: '10%' }} className="text-center">Số điểm TB</th>
                            <th style={{ width: '10%' }} className="text-center">Lượt review</th>
                            <th style={{ width: '25%' }}>{n}</th>
                            <th style={{ width: '15%' }}> Ngày Công Chiếu</th>

                        </tr>
                    </thead>
                    <tbody className="thead-light">
                        {this.renderItem()}
                    </tbody>
                </table>
            </div>

        )
    }
}
export default Listreview;