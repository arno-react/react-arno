import React from 'react';
import Reflux from 'reflux';
import {Drop} from './Arno';
const Dustbin = Drop.Dustbin;
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                <div style={{height:'50px' ,textAlign:'center'}}><p>1111111111111111</p><p>1111111111111111</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>2222222222222222</p><p>2222222222222222</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>3333333333333333</p><p>3333333333333333</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>4444444444444444</p><p>4444444444444444</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>5555555555555555</p><p>5555555555555555</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>6666666666666666</p><p>6666666666666666</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>7777777777777777</p><p>7777777777777777</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>8888888888888888</p><p>8888888888888888</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>9999999999999999</p><p>9999999999999999</p></div>
            ],
            SData: ['内容0', '内容1', '内容2', '内容3', '内容4', '内容5', '内容6', '内容7', '内容8', '内容9'],
            TData: []
        };
    }

    onDrop(data) {
        this.setState({
            data: data
        });
    }

    onDropS(id) {
        let SData = this.state.SData;
        let TData = this.state.TData;
        let data = [];
        TData.forEach((d, i)=> {
            if (i == id) {
                SData.push(d);
            } else {
                data.push(d);
            }
        });
        this.setState({
            SData: SData,
            TData: data
        });
    }

    onDropT(id) {
        let SData = this.state.SData;
        let TData = this.state.TData;
        let data = [];
        SData.forEach((d, i)=> {
            if (i == id) {
                TData.push(d);
            } else {
                data.push(d);
            }
        });
        this.setState({
            SData: data,
            TData: TData
        });
    }

    render() {
        console.log(Drop);
        let SData = this.state.SData.map((d)=> {
            return (
                <span>{d}</span>
            );
        });
        let TData = this.state.TData.map((d)=> {
            return (
                <span>{d}</span>
            );
        });
        return (
            <div>
                <div>
                    <Drop data={this.state.data} className="drop"  childrenClass="children" onDrop={this.onDrop.bind(this)} mode="horizontal"/>
                </div>
                <div>
                    <Dustbin data={SData} className="dustbin-div"  childrenClass="children"onDrop={this.onDropS.bind(this)}/>
                    <Dustbin data={TData} className="dustbin-div"  childrenClass="children" onDrop={this.onDropT.bind(this)}/>
                </div>
            </div>


        );
    }
}


export default List;
