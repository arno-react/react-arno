import React from 'react';
import './styles/Drop.css';
class Dustbin extends React.Component {
    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragStart(e) {
        e.dataTransfer.setData('arnoId', e.target.getAttribute('data-arnoid'));
    }

    onDragEnter(e) {

    }

    onDragLeave(e) {

    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {
        e.preventDefault();
        var arnoId = e.dataTransfer.getData('arnoId');
        this.props.onDrop(arnoId);
    }


    render() {
        // mode   String: vertical  horizontal 支持垂直、水平   默认：vertical
        let className =this.props.childrenClass + ' arno-drop-vertical';
        if (this.props.mode == 'horizontal') {
            className =this.props.childrenClass + ' arno-drop-horizontal';
        }
        let children = this.props.data.map((d, index)=> {
            return (
                <div className={className} key={index} data-arnoid={index} draggable='true'
                     onDragStart={this.onDragStart}>
                    {d}
                </div>
            );
        });
        return (

            <div className={'arno-drop ' +this.props.className } onDrop={this.onDrop} onDragOver={this.onDragOver}>
                {children}
            </div>


        );
    }
}
export default Dustbin;
