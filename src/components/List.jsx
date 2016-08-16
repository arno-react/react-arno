import React from 'react';
import Reflux from 'reflux';
import Drop from './Drop/Drop';
import Arno from './Arno';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                <div style={{height:'50px' ,textAlign:'center'}}><p>1111111111111111</p><p>1111111111111111</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>2222222222222222</p><p>2222222222222222</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>3333333333333333</p><p>3333333333333333</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>4444444444444444</p><p>4444444444444444</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>5555555555555555</p><p>5555555555555555</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>6666666666666666</p><p>6666666666666666</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>7777777777777777</p><p>7777777777777777</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>8888888888888888</p><p>8888888888888888</p></div>,
                <div style={{height:'50px',textAlign:'center'}}><p>9999999999999999</p><p>9999999999999999</p></div>
            ]
        };
    }
    onDrop(data){
        this.setState({
            data:data
        });
    }
    render() {
        console.log(Drop);
        return (

            <div>
                <Drop  data ={this.state.data} className="drop" onDrop={this.onDrop.bind(this)}/>
            </div>

        );
    }
}



export default List;
