import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';


class GdlButton extends Component {

    static defaultProps = {
            name:"not Name props"
    }
    static propTyps = {
            name:PropTypes.string
    }
    state = {
        dName:'noCount Button',
        number:1
    };
 
    render() {
        const btnStyle ={
            display:"inline-block",
            width:"auto",
            border:"1px solid transparent",
            borderRadius:"4px",
            margin:'1px',
            backgroundColor:"#5cb85c",
            color:"#FFFFFF",
            fontWeight:"400",
            fontSize:"14px",
            lineHeight:"1.42857143",
            height:"100%"

        }
        const btnList = Array(this.props.count).fill(null).map((i,index) =>{
                return  <button type="button" style={btnStyle} key={"Btn_"+index} > {this.props.name +"_"+index}</button>;
        });
        return (
            <Fragment>
                {/* porps 로 count가 넘어오면 개수만큼 카운트 없으면
                 기본 버튼 렌더 */}
                {
                    this.props.count ? 
                    btnList : 
                    <button type="button" style={btnStyle}  
                        onClick={ ()=>{
                                this.setState({
                                    dName: this.state.dName.split('_')[0]+"_"+this.state.number,
                                    number:this.state.number+1
                                })
                        } }> {this.state.dName} </button>
                }
            </Fragment>
        );
    }
}

export default GdlButton;