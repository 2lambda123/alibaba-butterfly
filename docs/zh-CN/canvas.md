# 画布(Canvas)

```js
let canvas = new Canvas({
  root: dom,
  theme: {},
  ...
  // 如下属性
});
canvas.draw({
	// 数据
})
```

<br>
<br>

## 属性

### root _`<dom>`_ (必填)

&nbsp;&nbsp;实例容器，一般是一个具有宽高的dom元素, canvas 根节点(必传)
  
### zoomable _`<Boolean>`_   (选填)

&nbsp;&nbsp;画布是否可缩放；值类型 `boolean`，默认 `false`

### moveable _`<Boolean>`_   (选填)

&nbsp;&nbsp;画布是否可移动；值类型 `boolean`，默认 `false`

### draggable _`<Boolean>`_   (选填)

&nbsp;&nbsp;画布节点是否可拖动；值类型 `boolean`，默认 `false`

### linkable _`<Boolean>`_   (选填)

&nbsp;&nbsp;画布节点是否可拖动；值类型 `boolean`，默认 `false`

### disLinkable _`<Boolean>`_   (选填)

&nbsp;&nbsp;画布节点是否可拖动；值类型 `boolean`，默认 `false`

### theme

&nbsp;&nbsp;画布主题配置，默认初始化样式和交互，主要分为：

* edge 连线配置: 默认所有线段的样式和交互

  *参数*：

  * type _`<String>`_ 标志线条连接到节点还是连接到锚点。默认为`endpoint`

  * shapeType _`<String>`_  线条类型可以是：Bezier(贝塞尔曲线)，Flow(折线)，Straight(直线)，Manhattan(曼哈顿路由线)，AdvancedBezier(更美丽的贝塞尔曲线)；默认为`Straight`

  * label _`<String/Dom>`_ 线条注释

  * labelPosition _`<Number>`_ 线条上注释位置: 取值0-1之间, 0代表代表在线段开始处，1代表在线段结束处。 默认值`0.5`

  * labelOffset _`<Number>`_ 线条上注释的位置的偏移值: 距离线段注释位置的偏移值。 默认值为`0`，单位是像素

  ```js
  // labelPosition & labelOffset: 注释位置在线段中间处，再往结束方向偏移20px
  {
    labelPosition: 0.5,
    labelOffset: 20
  }
  ```

  * arrow _`<Boolean>`_ 线条箭头; 默认为`true`

  * arrowPosition _`<Number>`_ 箭头位置: 取值0-1之间, 0代表代表在线段开始处，1代表在线段结束处。 默认值`0.5`

  * arrowOffset _`<Number>`_ 箭头位置的偏移值: 距离线段箭头位置的偏移值。 默认值为`0`，单位是像素

  * isExpandWidth _`<Boolean>`_ 增加线条交互区域, 默认为`false`。若true时，获取`eventHandlerDom`用于挂载事件

  * defaultAnimate `<Boolean>`_ 默认开启线条动画; 默认为`false`

  * Class _`<Class>`_ 自定义拓展的Class

* endpoint 锚点配置: 默认所有锚点的样式和交互

  *参数*：默认所有节点组的样式和交互

  * linkableHighlight _`<Boolean>`_ 连线时会触发point.linkable的方法，可做线条高亮展示；默认为 `true`

  * limitNum _`<Number>`_ 限制锚点的连接数目；默认为 `10`

  * expandArea _`<Object>`_ 锚点连接的热区: 由于锚点区域有可能过小，所以提供了热区扩大的属性；默认 `{left: 10, top: 10, right: 10, bottom: 10}`

* group 节点组配置

  *参数*：

  * type _`<String>`_ 节点组类型: `normal`(随意拖入拖出), `inner`(只能拖入不能拖出);默认为 `normal`

  * includeGroups _`<Boolean>`_ 节点组是否允许嵌套节点组

* zoomGap _`<Number>`_ 鼠标放大缩小间隙设置；取值[0-1]之间，默认 `0.001`

* autoFixCanvas 节点拖动或连线拖动到画布边缘时，画布自动延展

  *参数*：

  * enable _`<Boolean>`_ 画布是否自动延展；默认 `false`

  * autoMovePadding _`<Array>`_ 触发自动延展的画布内边距；默认 `[20,20,20,20]`
  
* autoResizeRootSize _`<Boolean>`_ 自动适配Root容器大小；默认 `true`

### global   (选填)

&nbsp;&nbsp;global	全局属性； _`object (Option)`_，默认 `undefined`

<br>
<br>

## API

### canvas.draw (data, calllback)

*作用*：画布的渲染方法, `注意画布渲染是异步渲染`

*参数*

* `{object} data` 里面包含分组，节点，连线
* `{function} calllback` `*渲染过程是异步的过程，需要的用户请留意回调`

```js
draw = (data, calllback) => {}
```

### canvas.redraw (data, calllback)

*作用*：重新渲染方法，会将之前的所有元素删除重新渲染, `注意画布渲染是异步渲染`

*参数*

* `{object} data` 重绘时新的分组，节点，连线
* `{function} calllback` `*渲染过程是异步的过程，需要的用户请留意回调`

```js
redraw = (data, calllback) => {}
```

### canvas.getDataMap (data, calllback)

*作用*：获取画布的所有数据：节点，线段，分组

*返回*

* `{object} data` 分组，节点，连线的数据

```js
getDataMap = () => {}
```

### canvas.setLinkable (boolean)

*作用*：设置画布所有节点是否可拉线

*参数*

* `{true|false} boolean` 是否支持所有节点可拉线
```js
setLinkable = (boolean) => {}
```

### canvas.setDisLinkable (boolean)

*作用*：设置画布所有节点是否可断线

*参数*

* `{true|false} boolean` 是否支持所有节点可断线
```js
setDisLinkable = (boolean) => {}
```

### canvas.setDraggable (boolean)

*作用*：设置画布所有节点是否可拖动

*参数*

* `{true|false} boolean` 是否支持所有节点可拖动
```js
setDraggable = (boolean) => {}
```

### canvas.getGroup (string)

*作用*：根据id获取group

*参数*

* `{string} id` group id

*返回*

* `{Group}` 分组对象

```js
getGroup = (string) => {}
```

### canvas.addGroup (object|Group, nodes, options)

*作用*：添加分组。若分组不存在，则创建分组并把nodes放进分组内；若分组存在，则会把nodes放进当前分组内。

*参数*

* `{object | Group} object` 分组: 新建分组信息或Group分组实例
* `{array< object | Node >} object` (选填)节点信息: 会把这些节点加入到分组内, 若节点不存在会新建节点
* `{object} options` 参数
* `{string} options.posType` 'absolute or relative' , 标识节点的坐标是相对画布的绝对定位还是相对于节点组
* `{number} options.padding` 添加节点组padding

```js
addGroup = (object|Group, nodes, options) => {}
```

此API除了可以新建节点组以外, 还可以做多选成组:

<img width="400" src="https://img.alicdn.com/imgextra/i1/O1CN01S2n8Sy1aayJ8euH7n_!!6000000003347-1-tps-600-400.gif">

### canvas.removeGroup (string | Group)

*作用* 删除节点组, 但不会删除里面的节点

*参数*

* `{string | Group} id` group id / Group实例

*返回*

* `{Group}` 删除的对象

```js
removeGroup = (string | Group) => {}
```

### canvas.getNode (string)

*作用*：根据id获取node

*参数*

* `{string} id` node id

*返回*

* `{Node}` 节点对象

```js
getNode = (string) => {}
```

### canvas.addNode (object|Node)

*作用*：添加节点

*参数*

* `{object|Node} object` 节点的信息；Node － 节点的基类

```js
addNode = (object|Node) => {}
```

### canvas.addNodes (array<object|Node>)

*作用*：批量添加节点

*参数*

* `{array<object|Node>}` 节点的信息；Node － 节点的基类

```js
addNodes = (array<object|Node>) => {}
```

### canvas.removeNode (string)

*作用*：删除节点

*参数*

* `nodeId string`  - 节点id

```js
removeNode = (string) => {}
```

### canvas.removeNodes (array)

*作用*：批量删除节点

*参数*

* `nodeIds array`  - 批量节点id

```js
removeNodes = (array) => {}
```

### canvas.addEdge (object|Edge)

*作用*：添加连线

*参数*

* `{object|Edge} object`  - 连线的信息；Edge － 连线的基类

```js
addEdge = (object|Edge) => {}
```

### canvas.addEdges (array<object|Edge>)

*作用*：批量添加连线

*参数*

* `{array<object | Edge>}`   - 连线的信息；Edge － 连线的基类

```js
addEdges = (array<object|Edge>) => {}
```

### canvas.removeEdge (param)

*作用*：根据id或者Edge对象来删除线

*参数*

* `{string | Edge} id or Edge`  - 线的id或者Edge对象

*返回*

* `{Edge}` - 删除的线

```js
removeEdge = (param) => {}
```

### canvas.removeEdges (param)

*作用*：根据id或者Edge对象来批量删除线

*参数*

* `{array} string or Edge`  - 线的id或者Edge对象的数组

*返回*

* `{array} Edge` - 删除的线

```js
removeEdges = (param) => {}
```

### canvas.getNeighborEdges (string)

*作用*：根据node id获取相邻的edge

*参数*

* `{string} nodeId`  - node id

*返回*

* `{Edges}` - 相邻的连线

```js
getNeighborEdges = (string) => {}
```

### canvas.getNeighborEdgesByEndpoint (string, string)

*作用*：根据endpoint id获取相邻的edge

*参数*

* `{string} nodeId`  - node id
* `{string} endpointId`  - endpoint id

*返回*

* `{Edges}` - 相邻的连线

```js
getNeighborEdgesByEndpoint = (string, string) => {}
```

### canvas.getNeighborNodesAndEdgesByLevel (options)

*作用*：查找 N 层关联节点和边

*参数*
  * `{Object} options` - 参数
  * `{Node} options.node` - 起始节点
  * `{Endpoint} options.endpoint` - 起始锚点，可选
  * `{String} options.type` - 查找方向，可选值为 all\in\out，默认all，可选
  * `{Number} options.level` - 层数，起始节点为第 0 层，默认 Infinity
  * `{Function} options.iteratee` - 是否继续遍历判定函数，返回 boolean 值

*返回*

* `{Object<nodes: Node, edges: Edge>} filteredGraph` - 查找结果

```js
getNeighborNodesAndEdgesByLevel = (options) => {}
```

### canvas.setEdgeZIndex (edges, zIndex)

*作用*：设置线段z-index属性

*参数*

* `{Array<Edge>} edges` - 线段
* `{number} zIndex` - z-index的值

```js
setEdgeZIndex = (edges, zIndex) => {}
```

### canvas.setZoomable (boolean, boolean)

*作用*：设置画布缩放

*参数*

* `{true|false} boolean`  - 是否支持画布缩放
* `{true|false} boolean`  - 放大缩小方向。现在默认为MAC的双指方向，却于Window的鼠标滑轮方向相反。默认值：false。若true，则方向相反

```js
setZoomable = (boolean, boolean) => {}}
```

### canvas.setMoveable (boolean)

*作用*：设置画布平移

*参数*

* `{true|false} boolean`  - 是否支持画布平移

```js
setMoveable = (boolean) => {}
```

### canvas.move  (postion)

*作用*：手动设置画布偏移

*参数*

* `{[x, y]} array`  - x,y坐标

```js
move = (postion) => {}
```

### canvas.zoom (scale)

*作用*：手动设置画布缩放

*参数*

* `{float} scale` - 0-1之间的缩放值
* `{function} callback`  - 缩放后的回调

```js
zoom = (scale) => {}
```

### canvas.getZoom ()

*作用*：获取画布的缩放

*返回*

* `{float}` - 画布的缩放(0-1)

```js
getZoom = () => {}
```

### canvas.getOffset ()

*作用*：获取画布的偏移值

*返回*

* `{[x, y]}` - 画布的偏移值

```js
getOffset = () => {}
```

### canvas.getOrigin ()

*作用*：获取画布的偏移值的中心点

*返回*

* `{[x, y]}` - 画布的偏移值的中心点(百分比)

```js
getOrigin = () => {}
```

### canvas.setOrigin ([x ,y])

*作用*：手动设置画布缩放的中心点

*参数*

* `{[x, y]} array` - x,y的中心点坐标

```js
setOrigin = ([x ,y]) => {}
```

### canvas.focusNodeWithAnimate (string, type, options, callback)

*作用*：聚焦某个节点/节点组

*参数*

* `{string/function} nodeId/groupId or filter`  - 节点的id或者过滤器
* `{string} type`  - 节点的类型(node or group)
* `{object} options {offset: [0,0]}`  - 聚焦配置属性，如偏移值
* `{function} callback`  - 聚焦后的回调

```js
focusNodeWithAnimate = (string, type, options, callback) => {}
```

### canvas.focusNodesWithAnimate (objs, type, options, callback)

*作用*：聚焦某多个节点/节点组

*参数*

* `{object} {nodes: [], groups: []}`  - 节点和节点组的id数组
* `{array} type`  - 节点的类型(node or group)
* `{object} options {offset: [0,0]}`  - 聚焦配置属性，如偏移值
* `{function} callback`  - 聚焦后的回调

```js
focusNodesWithAnimate = (objs, type, options, callback) => {}
```

### canvas.focusCenterWithAnimate (options, callback)

*作用*：聚焦整个画布，会自动调整画布位置和缩放

*参数*

* `{object} options {offset: [0,0]}`  - 聚焦配置属性，如偏移值
* `{function} callback`  - 聚焦后的回调

```js
focusCenterWithAnimate = (options, callback) => {}
```

<img width="400" src="https://img.alicdn.com/imgextra/i2/O1CN01zrkUqk1SP34Sup0vt_!!6000000002238-1-tps-1661-824.gif">

### canvas.redo (options)

*作用*：重做操作

```js
redo = (options) => {}
```

### canvas.undo (options)

*作用*：回退操作

```js
undo = (options) => {}
```

### canvas.pushActionQueue (options)

*作用*：给操作队列(undo/redo的队列)新增最顶部元素

*参数*
* `{Object} options` - 参数
* `{String} options.type` - 队列类型
* `{Object} options.data` - 队列数据

```js
pushActionQueue = (options) => {}
```

### canvas.popActionQueue (options)

*作用*：给操作队列(undo/redo的队列)删除最顶部元素

```js
popActionQueue = (options) => {}
```

### canvas.clearActionQueue (options)

*作用*：清除操作队列(undo/redo的队列)

```js
clearActionQueue = (options) => {}
```

### canvas.terminal2canvas (coordinates)

*作用*：屏幕转换为画布的坐标

*参数*

* `{array<number>} coordinates` - 需要换算的坐标([x,y])

*返回*

* `{number}` - 转换后的坐标

```js
terminal2canvas = (coordinates) => {}
```

### canvas.canvas2terminal (coordinates)

*作用*：画布转换为屏幕的坐标

*参数*

* `{array<number>} coordinates` - 需要换算的坐标([x,y])

*返回*

* `{number}` - 转换后的坐标


```js
canvas2terminal = (coordinates) => {}
```

*描述*

* 如图所示，画布缩放，移动后的坐标和原来画布的坐标并不匹配，需要此方法来转换。特别注意：有拖动添加节点的用户们注意这两个`e.clientX`和`e.clientY`，需要调用此方法进行转换。

<img width="400" src="http://img.alicdn.com/tfs/TB1lWIAFHvpK1RjSZPiXXbmwXXa-973-850.jpg">


### canvas.setSelectMode (boolean, contents , selecMode)

*作用*：设置框选模式: 注意, 注意框选模式和普通拖动画布模式是互斥的, 没办法同时设置

*参数*
* `{true|false} boolean`  - 是否开启框选功能
* `{array} contents` - 可接受框选的内容(node|endpoint|edge),默认'node')
* `{string} selecMode` - 可接受框选的内容(include|touch|senior),默认'include',include:全部包含才可选中，touch:触碰就选中，senior:从左到右需要全部包含，从右到左只需触碰就能选中)

```js
setSelectMode = (boolean, contents , selecMode) => {}
```

### canvas.getUnion (name)

*作用*：获取聚合组

*参数*

* `{name} string`  - 聚合组的名称

```js
getUnion = (name) => {}
```

### canvas.getAllUnion ()

*作用*：获取所有聚合组

```js
getAllUnion = () => {}
```

### canvas.add2Union (name, obj)

*作用*：添加聚合组 || 添加聚合组元素

*参数*

* `{name} string`  - 聚合组名称。假如不存在，则添加聚合组；假如已存在，则添加聚合组元素
* `{obj} object`  - 聚合组的元素

```js
add2Union = (name, obj) => {}

this.canvas.add2Union('我的聚合组', {
  nodes: []     // Node对象或者nodeId
  groups: []    // Group对象或者groupId
  edges: []     // Edge对象或者edgeId
  endpoints: [] // Endpoint对象
});
```

### canvas.removeUnion (name)

*作用*：去除聚合组

*参数*

* `{name} string`  - 聚合组的名称

```js
removeUnion = (name) => {}
```

### canvas.removeAllUnion ()

*作用*：去除所有聚合组

```js
removeAllUnion = () => {}
```

<br>
<br>

## 事件

```js
let canvas = new Canvas({...});
canvas.on('type key', (data) => {
  //data 数据
});
```
*参数key值*

* `system.canvas.click` 点击画布空白处
* `system.canvas.zoom`	画布缩放
* `system.nodes.delete`	删除节点
* `system.node.move`	移动节点
* `system.nodes.add`	批量节点添加
* `system.links.delete`	删除连线
* `system.link.connect`	连线成功
* `system.link.reconnect`	线段重连
* `system.link.click`	点击事件
* `system.group.delete`	删除节点组
* `system.group.move`	移动节点组
* `system.group.addMembers`	节点组添加节点
* `system.group.removeMembers`	节点组删除节点
* `system.multiple.select`	框选结果
* `system.drag.start`	拖动开始
* `system.drag.move`	拖动
* `system.drag.end`	拖动结束

```js
/**
  * 发送事件
  */
emit = (string, obj) => {}

/**
  * 接受事件
  */
on = (string, callback) => {}
```

<br>
<br>

## 其他辅助方法

### canvas.setGirdMode (show, options)

*作用*：设置网格布局

*参数*

* `{true|false} boolean`  - 是否开启网格布局功能
* `{array} options` - 网格布局的定制化参数

```js
setGirdMode = (show, options) => {}

this.canvas.setGirdMode(true, {
  isAdsorb: false,         // 是否自动吸附,默认关闭
  theme: {
    shapeType: 'line',     // 展示的类型，支持line & circle
    gap: 23,               // 网格间隙
    adsorbGap: 8,          // 吸附间距
    backgroud: '#fff',     // 网格背景颜色
    lineColor: '#000',     // 网格线条颜色
    lineWidth: 1,          // 网格粗细
    circleRadiu: 1,        // 圆点半径
    circleColor: '#000'    // 圆点颜色
  }
});
```

### canvas.setMinimap = (show, options)

*作用*：设置缩略图

*参数*

* `{true|false} boolean`  - 是否开启缩略图功能
* `{Object}` 具体请参考缩略图章节

```js
setMinimap = (show, options) => {}
```

### canvas.save2img (options)

*作用*：画布保存为图片

*参数*

* `{object=} options` - 保存的图片参数，可选
* `{string=} options.type` - 图片格式(png/jpeg/svg,默认png)，可选
* `{number=} options.quality` - 图片质量(0~1，默认为1)，可选
* `{number=} options.width` - 图片宽度(默认为画布宽度)，可选
* `{number=} options.height` - 图片高度(默认为画布高度)，可选\

*返回*

* `{Promise}`

```js
save2img = (options) => {}

this.canvas.save2img({type: 'png', width: 1920, height: 1080, quality: 1})
  .then(dataUrl => {
    var link = document.createElement('a');
    link.download = 'XXX.png';
    link.href = dataUrl;
    link.click();
  });
```

### canvas.justifyCoordinate ()

*作用*：把画布上的节点，节点组自动对齐(必须在网格布局下才生效)

```js
justifyCoordinate = () => {}
```

### canvas.setGuideLine (show, options)

*作用*：设置辅助线

*参数*

* `{true|false} boolean`  - 是否开启辅助线功能
* `{array} options` - 辅助线的定制化参数

```js
setGuideLine = (show, options) => {}

this.canvas.setGuideLine(true, {
  limit: 1,             // 限制辅助线条数
  theme: {
    lineColor: 'red',   // 网格线条颜色
    lineWidth: 1,       // 网格粗细
  }
});
```

### canvas.updateRootResize ()

*作用*：当root移动或者大小发生变化时需要更新位置

```js
updateRootResize = () => {}
```