# tj-react-multi-select
基于antd的多选下拉框

​	

## 安装

```shell
npm install tj-react-multi-select --save
```



## 使用

```javascript
import MultiSelect from 'tj-react-multi-select';
```

在`render`函数中使用：

```react
<MultiSelect
  options={this.state.options}
  value={this.state.value}
  placeholder={this.state.placeholder}
  onChange={this.onChange.bind(this)}
/>
```

​	

## 属性列表

### options

描述多选下拉框的数据源，类型是数组。

数组的每一项是一个js对象，包含name（下拉项的文本）和value（下拉项的值）两个字段。

​	

### value

描述多选下拉框当前选中的值，类型是字符串数组。

数组中每一项对应一个下拉项的value。

​	

### placeholder

描述下拉框input控件的placeholder属性。

​	

### onChange( nextValue )

修改事件处理函数。当用户选中/取消选中下拉项时触发，参数为nextValue，表示修改后的value值。

​	

## 开发

依次执行以下代码：

```shell
# 签出代码
git clone https://github.com/zhizao/tj-react-multi-select.git

# 安装包
cd tj-react-multi-select
npm install

# 启动开发测试环境
npm start
```

​	



