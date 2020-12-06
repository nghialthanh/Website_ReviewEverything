import React, {Component} from 'react';

import 'react-slideshow-image/dist/styles.css'

const s1 = ['../assets/p1-TrangQuynh.jpg','../assets/p2-Ratatouille.jpg','../assets/p3-AvengerEndGame.jpg','../assets/p4-CivilWar.jpg','../assets/p5-789Muoi.jpg'];
const s2 = ['../assets/s1-DacNhanTam.JPG','../assets/s2-ChoToiXin1VeDiTuoiTho.jpg','../assets/s3-MatBiec.jpg','../assets/s4-DiTimLeSong.jpg','../assets/s5-TuoiThanhXuanDoiChuyenTauLac.JPG']
const s3 = ['../assets/g1-Dota2.jpg','../assets/g2-Valorant.jpg','../assets/g3-CSGO.jpg','../assets/g4-AmongUs.jpg','../assets/g5-PokemonGo.jpg']
export default class SlideshowGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            str: 'g5-PokemonGo' 
        }
        
      }
    componentDidMount() {
        let arr1= [];
        if (this.props.stateBody==1)
            arr1 = s1;
        else if (this.props.stateBody==2)
            arr1 = s2;
        else arr1= s3;
        this.setState({
            arr: arr1
        })
    }
    renderItem = () => {
        return this.state.arr.map((element,index) => {
            let str = element.substr(10);
            return(
                <div className="col-2 col-m-6 col-sm-6">
                    <div className="counter">
                    <img src={element} alt={str} title={str}/>
                    </div>
                </div>     
            )}
        )
    }
    render(){
        let n;
        if (this.props.stateBody==1)
            n="PHIM"
        else if (this.props.stateBody==2)
            n="SÁCH TRUYỆN"
        else n="GAME";
        return ( 
            <div className="wrapper">
                <span><kbd>TOP {n} ĐƯỢC ĐÁNH GIÁ CAO</kbd></span>
                <div className="row"> 
        
                    <div className="col-1 col-m-6 col-sm-6">  
                            <i className="fas fa-chevron-circle-left" /> 
                    </div>
                    {this.renderItem()}
                    {/*<div className="col-2 col-m-6 col-sm-6">
                        <div className="counter">
                         <img src="assets/5.jpg" />
                        </div>
                    </div> */}
                    <div className="col-1 col-m-6 col-sm-6">  
                            <i className="fas fa-chevron-circle-right" /> 
                    </div>
                </div>
            </div>
        );
    }
}