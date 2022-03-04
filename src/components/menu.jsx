import React from 'react';
import { menus } from './listitems';

export default class Menu extends React.Component {

  collapsed;

  constructor(props) {
    super(props);
    this.collapsed = props.collapsed ? props.collapsed : false;
  }

  getItems = (children) => {

    if (children) {
      return children.map(
        (child, index) => {
          if (child.group) {
            return (<div key={index} className="p-2">
              {child.name === '' ? <p>.</p> : ''}
              {this.getItems(child.children)}
            </div>
            );
          }

          return <a key={index} style={{ textDecoration: 'none' }}
            className={child.cls}
            name={child.link} cover
            href={child.link}>
            {child.name}
          </a>;
        },
      );
    }
  };

  getBlocItem = (menu) => {
    if (!this.collapsed) {
      if (menu.group) {
        return <div className="dropdown-content ">
          <div className="d-flex flex-row">
            {this.getItems(menu.children)}
          </div>
        </div>;
      }
      return <div className="dropdown-content1">
        {this.getItems(menu.children)}
      </div>;
    }
  };

  render() {
    return (
      menus.map(
        (menu, index) =>
          <div key={index} className="dropdown">
            <a style={{ textDecoration: 'none' }}
              className={menu.cls}
              name={menu.link} cover

              href={menu.link}>
              {menu.name}
            </a>
            {this.getBlocItem(menu)}

          </div>
          ,
      )

    );
  }
}
