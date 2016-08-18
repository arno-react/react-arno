import React from 'react';
import './styles/Drop.css';
class Drop extends React.Component {
    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragStart(e) {
        e.dataTransfer.setData("arnoId", e.target.getAttribute('data-arnoid'));
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
        let data = this.props.data;
        var arnoId = e.dataTransfer.getData("arnoId");
        let Drag = data[arnoId];
        let dropId = getDropId(e.target);

        function getDropId(elm) {
            let id = elm.getAttribute('data-arnoid');
            if (id == 0 || id) {
                return id;
            } else {
                return getDropId(elm.parentNode);
            }

        }

        let outData = [];
        data.forEach((d, index)=> {
            if (dropId < arnoId) {
                if (index == dropId) {
                    outData.push(Drag);
                }
                if (index != arnoId) {
                    outData.push(d);
                }
            } else {

                if (index != arnoId) {
                    outData.push(d);
                }
                if (index == dropId) {
                    outData.push(Drag);
                }
            }


        });
        this.props.onDrop(outData);

    }


    render() {
        // mode   String: vertical  horizontal 支持垂直、水平   默认：vertical
        let className =this.props.childrenClass + ' arno-drop-vertical';
        if (this.props.mode == "horizontal") {
            className =this.props.childrenClass + ' arno-drop-horizontal';
        }
        let children = this.props.data.map((d, index)=> {
            return (
                <div className={className} key={index} data-arnoid={index} draggable="true"
                     onDrop={this.onDrop} onDragOver={this.onDragOver}
                     onDragStart={this.onDragStart}>
                    {d}
                </div>
            );
        });
        return (

            <div className={this.props.className +" arno-drop"}>
                {children}
            </div>


        );
    }
}
export default Drop;
