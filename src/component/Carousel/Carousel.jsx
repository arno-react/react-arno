import React from 'react';
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    src: require('./images/demo1.jpg'),
                    alt: 'images-1',
                    href:''
                },
                {
                    src: require('./images/demo1.jpg'),
                    alt: 'images-1',
                    href:''
                }
            ],
            speed: 1.2,// 是图片切换的时候的速度时间，需要配置一个 number 类型的数据，决定时间是几秒
            delay: 2.1, // 是在需要自动轮播的时候，每张图片停留的时间，一个 number 值；
            pause: true, // 是在需要自动轮播的时候，鼠标停留在图片上，是否暂停轮播，是一个布尔值；
            autoPlay: true, //是配置是否需要自动轮播，是一个布尔值；
            dots: true, // 是配置是否需要轮播下面的小点 是一个布尔值；
            arrows: true //是配置是否需要轮播的前后箭头 是一个布尔值；
        }
    }


    render() {
        let children = this.state.items.map((d)=>{
                if(d.href){
                    return (
                        <li className="carousel-itme">
                            <a  href={d.href}>
                                <img src={d.src} alt={d.alt}/>
                            </a>
                        </li>

                    )
                }else{
                    return (
                        <li className="carousel-itme">
                                <img src={d.src} alt={d.alt}/>
                        </li>
                    )
                }
        });

        return (

            <div className={'arno-carousel'}>
                <ul>
                    {children}
                </ul>
            </div>


        );
    }
}
export default Carousel;
