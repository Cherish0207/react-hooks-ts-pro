import React, { useState, CSSProperties } from "react";
import { Transition } from "react-transition-group";//react-motion好用
import classnames from "classnames";
import { Icon } from "antd";
import logo from "@/assets/images/logo.png";
import "./index.less";
//ts 不认识图片，只认识js jsx tsx
//let logo = require('../../../../assets/images/logo.png');
//如果是用require加载的话，返回值的default属性才是那个图片地址
//如果你非要用import如何解决?
const duration = 1000; //动画的持续时间
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
//CSSProperties其实就是行内样式的对象定义
interface TransitionStyles {
  entering: CSSProperties;
  entered: CSSProperties;
  exiting: CSSProperties;
  exited: CSSProperties;
}
//在不同阶段给不同样式
const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface Props {
  currentCategory: string; //当前选中的分类 此数据会放在redux仓库中
  setCurrentCategory: (currentCategory: string) => any; // 改变仓库中的分类
}
function HomeHeader(props: Props) {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target: HTMLUListElement = event.target as HTMLUListElement; //强转类型
    let category = target.dataset.category;
    props.setCurrentCategory(category);
    setIsMenuVisible(false);
  };
  return (
    <header className="home-header">
      <div className="logo-header">
        <img src={logo} />
        <Icon type="bars" onClick={() => setIsMenuVisible(!isMenuVisible)} />
      </div>
      <Transition in={isMenuVisible} timeout={duration}>
        {(state: keyof TransitionStyles) => (
          <ul
            className="category"
            onClick={setCurrentCategory}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <li
              data-category="all"
              className={classnames({
                active: props.currentCategory === "all",
              })}
            >
              全部课程
            </li>
            <li
              data-category="react"
              className={classnames({
                active: props.currentCategory === "react",
              })}
            >
              React课程
            </li>
            <li
              data-category="vue"
              className={classnames({
                active: props.currentCategory === "vue",
              })}
            >
              Vue课程
            </li>
          </ul>
        )}
      </Transition>
    </header>
  );
}
export default HomeHeader;
/**
 * 动画是如何实现的？
 *  Transition
 * 动态给一个元素增加/删除类名,不同类名对应不同样式
 * 另外再加一个tansition效果就可以了
 */
