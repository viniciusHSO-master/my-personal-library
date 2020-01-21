import React from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      data:[
        {
          id:0,
          menu:"Contato",
          icon:"fas fa-chevron-down",
          iconColor:"#666",
          redirect:"/Contato",
          submenu:[
            {
              id:0,
              nome:"Link1",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            },
            {
              id:1,
              nome:"Link2",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            }
          ]
        },
        {
          id:0,
          menu:"Faturas",
          icon:"fas fa-chevron-down",
          iconColor:"#666",
          redirect:"/Faturas",
          submenu:[
            {
              id:0,
              nome:"Link1",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            },
            {
              id:1,
              nome:"Link2",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            }
          ]
        },
        {
          id:0,
          menu:"Financeiro",
          icon:"fas fa-chevron-down",
          iconColor:"#666",
          redirect:"/Financeiro",
          submenu:[
            {
              id:0,
              nome:"Link1",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            },
            {
              id:1,
              nome:"Link2",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            }
          ]
        },
        {
          id:0,
          menu:"Perfil",
          icon:"fas fa-user",
          iconColor:"#666",
          redirect:"/Perfil",
          submenu:[
            {
              id:0,
              nome:"Link1",
              icon:"fas fa-chevron-down",
              iconColor:"#666",
              redirect:"/Financeiro",
            },
            {
              id:1,
              nome:"Link2",
              icon:"fas fa-bars",
              iconColor:"#666",
              redirect:"/Financeiro",
            }
          ]
        },
      ],
      textMenuColor:"#666",
    };
  }
  render() {
    return (
      <aside style={{backgroundColor:"transparent", borderWidth:10, borderColor:"#000"}} class="main-sidebar sidebar-light-light ">
        <div style={{backgroundColor:"transparent"}}>
          <a data-widget="pushmenu" class="brand-link">
            <img src="dist/img/logo.png" alt="AdminLTE Logo" class="brand-image "
                style={{opacity: .8}}/>
            <span style={{color:"#fff"}} class="brand-text font-weight-light">Central Master</span>
          </a>
        </div>
  
      <div style={{margin:"auto", width:"96%",backgroundColor:"#fff", borderWidth:100, borderColor:"#000", borderRadius:20}}class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
          </div>
          <div class="info">
            <a href="#" class="d-block">Olá, {this.props.nome|| "Usuário"}</a>
          </div>
        </div>
  
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {
              this.state.data.map((d,i)=>{
                return(
                  <li class="nav-item has-treeview menu-close">
                  <a href="#" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      {d.menu}
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                   {d.submenu.map((p,i)=>{
                     return(
                      <li class="nav-item">
                      <a href="./index2.html" class="nav-link">
                        <i class={p.icon+" nav-icon"}></i>
                        <p>{p.nome}
                        <span class="right badge badge-danger">New</span>
                        </p>
                      </a>
                    </li>
                     )
                   })}
                  </ul>
                </li>
                )
              })
            }
           
          </ul>
        </nav>
      </div>
    </aside>
    );
  }
}
export default Menu;