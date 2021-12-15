import React, { useState } from "react";
import classnames from "classnames";
import { Icon } from "antd";
import logo from "@/assets/images/logo.png";
import "./index.less";
//ts 不认识图片，只认识js jsx tsx
//let logo = require('../../../../assets/images/logo.png');
//如果是用require加载的话，返回值的default属性才是那个图片地址
//如果你非要用import如何解决?

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
      {isMenuVisible && (
        <ul className="category" onClick={setCurrentCategory}>
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
    </header>
  );
}
export default HomeHeader;
