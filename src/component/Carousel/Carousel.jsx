import React from 'react';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Dots extends React.Component {
    constructor(props) {
        super(props);
    }
    dotsClick(i) {
        this.props.onClick(i);
    }
    render() {
        let children = [];
        for(var i= 0 ;i<this.props.letngth;i++){
            if (this.props.active == i) {
                children.push (
                    <span className="carousel-dot carousel-dot-selected" onClick={this.dotsClick.bind(this,i)} key={i}/>
                )
            } else {
                children.push (
                    <span className="carousel-dot" onClick={this.dotsClick.bind(this,i)} key={i}/>
                )
            }
        }
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
            delay: 5, // 是在需要自动轮播的时候，每张图片停留的时间，一个 number 值；
            pause: true, // 是在需要自动轮播的时候，鼠标停留在图片上，是否暂停轮播，是一个布尔值；
            autoPlay: true, //是配置是否需要自动轮播，是一个布尔值；
            dots: true, // 是配置是否需要轮播下面的小点 是一个布尔值；
            arrows: true, //是配置是否需要轮播的前后箭头 是一个布尔值；
            active: 1
        };
        this.stopPlay = this.stopPlay.bind(this);
        this.autoPlay = this.autoPlay.bind(this);
        this.type ='carouselright';
    }

    componentWillMount() {

        let delay = this.state.delay, pause = this.state.pause, autoPlay = this.state.autoPlay,
            dots = this.state.dots, arrows = this.state.arrows;

        if (this.props.delay) {
            delay = this.props.delay;
        }
        if (this.props.pause == false) {
            pause = this.props.pause;
        }
        if (this.props.autoPlay == false) {
            autoPlay = this.props.autoPlay;
        }
        if (this.props.dots == false) {
            dots = this.props.dots;
        }
        if (this.props.arrows == false) {
            arrows = this.props.arrows;
        }
        this.setState({
            delay, pause, autoPlay, dots, arrows
        });
    }
    componentDidMount() {
        if (this.state.autoPlay) {
            this.autoPlay()
        }
    }
    autoPlay() {
        if (this.state.pause && this.state.autoPlay) {
            let _this = this;
            clearInterval(this.t);
            this.t = setInterval(function () {
                if (_this.state.active >= (_this.props.children.length )) {
                    return;
                }
                _this.onClick(
                    _this.state.active + 1
                )
            }, this.state.delay * 1000 )
        }

    }
    stopPlay() {
        if (this.state.pause) {
            clearInterval(this.t);
        }
    }
    componentDidUpdate() {

    }

    onClick(value) {
        if(value < this.state.active){
            this.type ='carouselright';
        }else{
            this.type ='carouselleft';
        }
        if (value < 0) {
            value = this.props.children.length - 1;
        } else if (value >= this.props.children.length) {
            value = 0;
        }
        this.setState({
            active: value
        })
    }


    render() {

        let children = this.props.children.map((d, i)=> {
            return (
                <span className="arno-carousel-itme" key={i}>
                    {d}
                </span>
            )
        });
        let dotsNode = <Dots letngth={this.props.children.length} active={this.state.active} onClick={this.onClick.bind(this)}/>;
        let arrowsNode = <Arrows active={this.state.active} onClick={this.onClick.bind(this)}/>;
            console.log(this.props.children);
        return (

            <div className={'arno-carousel'} onMouseOver={this.stopPlay} onMouseOut={this.autoPlay} ref="carousel">
                <ReactCSSTransitionGroup transitionName={this.type}  className="carousel"
                                         transitionLeaveTimeout={300} transitionEnterTimeout={300}>
                    {children[this.state.active]}
                </ReactCSSTransitionGroup>
                {this.state.arrows?arrowsNode:null}
                {this.state.dots?dotsNode:null}
            </div>


        );
    }
}
export default Carousel;
