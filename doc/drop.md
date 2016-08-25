h5拖拽组件


## 组件介绍


- `className (str)`  组件最外容器class
- `childrenClass (str)`  每个拖拽元素的class
- `onDrop (func)` 回调，反回调整后的数组（drop组件反回元素集，dustbin组件反回下标集）
- `data (array)` 数据，为拖拽元素的集合
- `mode (str)`    vertical  horizontal 支持垂直、水平   默认：vertical

### Drop
```jsx
<Drop data={this.state.data} className="drop" childrenClass="children"
                          onDrop={this.onDrop.bind(this)} mode="horizontal"/>
 ```
### Dustbin
 ```jsx
 <Dustbin data={SData} className="dustbin-div" childrenClass="children"onDrop={this.onDropS.bind(this)} mode="horizontal"/>
 <Dustbin data={TData} className="dustbin-div" childrenClass="children" onDrop={this.onDropT.bind(this)} mode="horizontal"/>
 ```