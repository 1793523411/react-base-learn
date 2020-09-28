# react基础学习

## 核心概念

代码大致都在`components`目录下

1. Hello World
2. JSX 简介
3. 元素渲染
4. 组件 & Props
5. State & 生命周期
6. 事件处理
7. 条件渲染
8. 列表 & Key
9. 表单
10. 状态提升
11. 组合 vs 继承
12. React 哲学

## 高级指引

### 无障碍

这一部分没有什么，因为没太看懂

### 代码分割

在你的应用中引入代码分割的最佳方式是通过动态 import() 语法。

fallback 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 Suspense 组件置于懒加载组件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
```

```js
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```
基于路由的代码分割
```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```

React.lazy 目前只支持默认导出（default exports）。如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。这能保证 tree shaking 不会出错，并且不必引入不需要的组件

### Context

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中

context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容

### 错误边界
### Refs 转发
### Fragments
### 高阶组件
### 与第三方库协同
### 深入 JSX
### 性能优化
### Portals
### Profiler
### 不使用 ES6
### 不使用 JSX
### 协调
### Refs & DOM
### Render Props
### 静态类型检查
### 严格模式
### 使用 PropTypes 类型检查
### 非受控组件
### Web Components