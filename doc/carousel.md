轮播组件


## 组件介绍



- `delay (number)` 默认 5s   是在需要自动轮播的时候，每张图片停留的时间，一个 number 值；
- `pause (bool)`   默认 true 是在需要自动轮播的时候，鼠标停留在图片上，是否暂停轮播，是一个布尔值；
- `autoPlay (bool)`默认 true 是配置是否需要自动轮播，是一个布尔值；
- `dots (bool)`    默认 true 是配置是否需要轮播下面的小点 是一个布尔值；
- `arrows (bool)`  默认 true 是配置是否需要轮播的前后箭头 是一个布尔值；

### Carousel
```jsx
<Carousel delay={8} dots ={false} >
        <div>
            <img src={require('./images/1.jpg')} alt="images-1"/>
        </div>
        <div>
            <img src={require('./images/2.jpg')} alt="images-2"/>
        </div>
        <div>
            <img src={require('./images/1.jpg')} alt="images-3"/>
        </div>
</Carousel>
```