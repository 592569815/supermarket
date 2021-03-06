import React from "react";
import {connect} from 'react-redux'
import { Layout, Menu } from "element-react";
import {Route, Link, hashHistory} from 'react-router';
import { Input, Button, Form, Table, Message, Select, MessageBox, Pagination} from "element-react";


class ListComponent extends React.Component{
	onOpen() {

	}

	onClose() {

	}

	componentDidMount(){
		
	
	}
	
	products() {
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push("/products");	
	}

	addProducts() {
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push("/addproduct");
	}

	search() {
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push('/searchProduct');
	}

	searchSupplier() {
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push('/suppliers');
	}

	addSupplier() {
		hashHistory.push('/addSupplier');
	}

	addUser(){
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push("/add");
	}

	purcharse(){
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push("/purcharse");
	}
	
	shouyin(){
		
		var name = filter(this.props.store.login.name);
		if(!name){
			return;
		}
		hashHistory.push("/post_login");
	}
	render(){
		return (
				<Layout.Col  className = "list" >
		        <Menu defaultActive="2" className="el-menu-vertical-demo"  onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
		          <Menu.SubMenu index="1" title={<span><i className="fa fa-bars " aria-hidden="true"></i>商品管理</span>}>
		              <Menu.Item index="1-1"><i className="fa fa-pencil-square-o " aria-hidden="true"></i><span onClick = {this.addProducts.bind(this)}>商品录入</span></Menu.Item>
		              <Menu.Item index="1-2"><i className="fa fa-eye " aria-hidden="true" ></i><span onClick = {this.products.bind(this)}>商品浏览</span></Menu.Item>
		              <Menu.Item index="1-3"><i className="fa fa-search " aria-hidden="true"></i><span onClick = {this.search.bind(this)}>商品查询</span></Menu.Item>

		          </Menu.SubMenu>
		          <Menu.SubMenu index="2" title={<span><i className="el-icon-information"></i>供应商管理</span>}>
		              <Menu.Item index="2-1"><i className="el-icon-caret-right "></i><span onClick={this.addSupplier.bind(this)} >供应商录入</span></Menu.Item>
		              <Menu.Item index="2-3"><i className="el-icon-caret-right "></i><span onClick={this.searchSupplier.bind(this)} >供应商查询</span></Menu.Item>
		          </Menu.SubMenu>
		          <Menu.SubMenu index="3" title={<span><i className="fa fa-th-large " aria-hidden="true"></i>库存管理</span>}>
		              <Menu.Item index="3-1"><i className = "fa fa-cube "></i><span onClick = {this.purcharse.bind(this)}>商品入库</span></Menu.Item>
		              <Menu.Item index="3-2"><i className = "fa fa-cube "></i>商品出库</Menu.Item>
		          </Menu.SubMenu>
		          <Menu.SubMenu index="4" title={<span><i className="fa fa-users " aria-hidden="true"></i>用户管理</span>}>
		              <Menu.Item index="4-1"><i className = "fa fa-user-plus "></i><span onClick = {this.addUser.bind(this)}>添加用户</span></Menu.Item>
		              <Menu.Item index="4-2"><i className="fa fa-user-times " aria-hidden="true"></i>删除用户</Menu.Item>
		          </Menu.SubMenu>
		          <Menu.SubMenu index="5" title={<span><i className="fa fa-money " aria-hidden="true"></i>前台收银</span>}>
		              <Menu.Item index="5-1"><i className = "fa fa-arrow-circle-right "></i><sapn onClick = {this.shouyin.bind(this)}>打开收银台</sapn></Menu.Item>
		          </Menu.SubMenu>
		        </Menu>
		      </Layout.Col>
		
		)
	}
}
const mapStateToProps = state => ({
    store:state
})
export default connect(mapStateToProps)(ListComponent);

function filter(name){

    if(!name){
    
    	Message({type: "info", message: "请先登录！"});
    	return false;
    }
    return true;
}