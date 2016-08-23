import React from 'react';
import ReactDOM from 'react-dom';
const findDOMNode = ReactDOM.findDOMNode;
console.log(React);
class Dots extends React.Component {
    constructor(props) {
        super(props);

    }

    dotsClick(i) {
        this.props.onClick(i + 1);
    }

    render() {
        let children = this.props.items.map((d, i)=> {
            if (this.props.active == i + 1) {
                return (
                    <span className="carousel-dot carousel-dot-selected" onClick={this.dotsClick.bind(this,i)} key={i}/>
                )
            } else {
                return (
                    <span className="carousel-dot" onClick={this.dotsClick.bind(this,i)} key={i}/>
                )
            }

        });
        return (

            <div className='arno-carousel-dots'>
                {children}
            </div>


        );
    }
}
class Arrows extends React.Component {
    constructor(props) {
        super(props);

    }

    arrowsClick(i) {

        this.props.onClick(this.props.active + i);
    }

    render() {

        return (

            <div  >
                <div className="arno-carousel-arrows carousel-arrow-right" onClick={this.arrowsClick.bind(this,-1)}>
                    <i className="arnoicon arnoicon-left"/>
                </div>
                <div className="arno-carousel-arrows carousel-arrow-left" onClick={this.arrowsClick.bind(this,1)}>
                    <i className="arnoicon arnoicon-right"/>
                </div>
            </div>


        );
    }
}
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            speed: 1.2,// 是图片切换的时候的速度时间，需要配置一个 number 类型的数据，决定时间是几秒
            delay: 2.1, // 是在需要自动轮播的时候，每张图片停留的时间，一个 number 值；
            pause: true, // 是在需要自动轮播的时候，鼠标停留在图片上，是否暂停轮播，是一个布尔值；
            autoPlay: true, //是配置是否需要自动轮播，是一个布尔值；
            dots: true, // 是配置是否需要轮播下面的小点 是一个布尔值；
            arrows: true, //是配置是否需要轮播的前后箭头 是一个布尔值；
            active: 1
        };
        this.setSpeed = this.setSpeed.bind(this);
        this.stopPlay = this.stopPlay.bind(this);
        this.autoPlay = this.autoPlay.bind(this);

    }

    componentWillMount() {
        this.autoPlay()
    }
    componentDidMount(){

    }
    autoPlay() {
        if (this.state.pause) {
            let _this = this;
            clearInterval(this.t);
            this.t = setInterval(function () {
                //_this.onClick(
                //   _this.state.active + 1
                //)
            }, this.state.delay * 1000)
        }

    }

    stopPlay() {
        clearInterval(this.t);
    }

    componentDidUpdate() {

        clearInterval(this.s);
        let _this =this;
        let width =findDOMNode(this.refs['carousel']).offsetWidth/(this.props.items.length + 2 );
        let left =findDOMNode(this.refs['carousel']).offsetLeft;

        let speed =1;
        let time =this.state.speed * 1000/(-width*this.state.active - left);
        if(-width*this.state.active <left){
            speed = -1;
            time =this.state.speed * 1000/(width*this.state.active + left);
        }
        console.log(left);
        console.log(width);
        console.log(-width*this.state.active);
        console.log(time);
        this.s = setInterval(function () {
            let width =findDOMNode(_this.refs['carousel']).offsetWidth/(_this.props.items.length + 2 );
            let left =findDOMNode(_this.refs['carousel']).offsetLeft;
            let speed =1;
            if(-width*_this.state.active ==left){
                clearInterval(_this.s);
            }
            findDOMNode(_this.refs['carousel']).setAttribute('style',
                'left:' +(left+speed)+'px;width:' + (_this.props.items.length + 2 ) * 100 + '%');
        }, time)
    }
    setSpeed(){
        clearInterval(this.s);
        let _this =this;
        let width =findDOMNode(this.refs['carousel']).offsetWidth/(this.props.items.length + 2 );
        let left =findDOMNode(this.refs['carousel']).offsetLeft;
        let speed =1;
        let time =this.state.speed * 1000/(-width*this.state.active - left);
        if(-width*this.state.active <left){
            speed = -1;
            time =this.state.speed * 1000/(width*this.state.active + left);
        }
        this.s = setInterval(function () {
            let width =findDOMNode(_this.refs['carousel']).offsetWidth/(_this.props.items.length + 2 );
            let left =findDOMNode(_this.refs['carousel']).offsetLeft;
            let speed =1;
            if(-width*_this.state.active ==left){
                clearInterval(_this.s);
            }
            findDOMNode(this.refs['carousel']).setAttribute('style',
                'left:' +(left+speed)+' px;width:' + (this.props.items.length + 2 ) * 100 + '%');
        }, time)
    }

    onClick(value) {
        console.log(value);
        this.setState({
            active: value
        })
    }


    render() {
        console.log(this.state.active);
        let count = this.props.items.length ? this.props.items.length + 2 : 0;
        let children = this.props.items.map((d, i)=> {
            if (d.href) {
                return (
                    <li className="arno-carousel-itme" style={{width:100/count +'%'}} key={i}>
                        <a href={d.href}>
                            <img src={d.src} alt={d.alt}/>
                        </a>
                    </li>

                )
            } else {
                return (
                    <li className="arno-carousel-itme" style={{width:100/count +'%'}} key={i}>
                        <img src={d.src} alt={d.alt}/>
                    </li>
                )
            }
        });
        children.push(
            <li className="arno-carousel-itme" style={{width:100/count +'%'}} key={this.props.items.length}
                onMouseOver={this.stopPlay} onMouseOut={this.autoPlay}>
                <img src={this.props.items[0].src} alt={this.props.items[0].alt}/>
            </li>
        );
        children.unshift(
            <li className="arno-carousel-itme" style={{width:100/count +'%'}} key={-1}
                onMouseOver={this.stopPlay} onMouseOut={this.autoPlay}>
                <img src={this.props.items[this.props.items.length-1].src}
                     alt={this.props.items[this.props.items.length-1].alt}/>
            </li>
        );
        let dotsNode = <Dots items={this.props.items} active={this.state.active} onClick={this.onClick.bind(this)}/>;
        let arrowsNode = <Arrows active={this.state.active} onClick={this.onClick.bind(this)}/>;
        let ulStyle = {
            left: -100 * this.state.active + "%",
            //transition: 'left ' + this.state.speed + "s",
            width: count * 100 + "%"
        };

        return (

            <div className={'arno-carousel'} onMouseOver={this.stopPlay} onMouseOut={this.autoPlay}>
                <ul style={ulStyle} ref="carousel">
                    {children}
                </ul>
                {this.state.arrows?arrowsNode:null}
                {this.state.dots?dotsNode:null}
            </div>


        );
    }
}
export default Carousel;
