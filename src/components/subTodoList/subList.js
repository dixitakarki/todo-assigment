import './subList.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import {addNodeAction,deleteNodeAction,updateStateAction} from '../../actions/index';
import {bindActionCreators} from 'redux';
import nextId from "react-id-generator";
class SubList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            defaltValue: "grocery",
            defaultText: "new node"
        }
    }
    componentDidMount() {
        if (this.props.selectedBucket !== '') {
            this.setState({
                defaltValue: this.props.selectedBucket
            });
        }
    }
    addNodeNameInternal = (e) => {
        this.setState({
            defaultText: e.target.value
        });
    }
    addNodeInternal = () => {
        let bucketNode = (this.props.selectedBucket) ? this.props.selectedBucket : this.state.defaltValue;
        let newObj = Object.assign({}, this.props.activeBucket);
        newObj[bucketNode] = [...newObj[bucketNode], {
            id: nextId(),
            text: this.state.defaultText,
            isPending: false
        }];
        this.props.addNode(newObj);
    }
    deleteNodeInternal = (e) => {
        let newObj = Object.assign({}, this.props.activeBucket);
        var filteredArray = newObj[e.target.dataset.element].filter((elem) => elem.id !== e.target.dataset.id);
        newObj[e.target.dataset.element] = filteredArray;
        this.props.deleteNode(newObj);
    }
    statusChange = (e) => {
        var check = e.target.checked;
        let bucketNode = (this.props.selectedBucket) ? this.props.selectedBucket : this.state.defaltValue;
        let newObj = Object.assign({}, this.props.activeBucket);
        newObj[bucketNode] = newObj[bucketNode].map((item, index) => {
            if (item.id !== e.target.dataset.element) {
                return item;
            }
            return {
                ...item,
                ...{
                    isPending: !item.isPending
                }
            }

        });
        this.props.updateNode(newObj);
    };
render(){
    var list1;
    if(this.props.selectedBucket!==''){
        list1 = this.props.activeBucket[this.props.selectedBucket].map(item => <div key={item.id}> 
            <input type="checkbox" data-element={item.id} onChange={this.statusChange} checked={item.isPending} className={item.isPending=='completed'?'completed':'pending'}/>     
            {item.text}
            <span><button onClick={this.deleteNodeInternal} data-element={this.props.selectedBucket} data-id={item.id}>delete node</button></span>
        </div>);
    }
    else {
        list1 = this.props.activeBucket[this.state.defaltValue].map(item => <div key={item.id}> 
            <input type="checkbox" data-element={item.id} onChange={this.statusChange} checked={item.isPending} className={item.isPending?'completed':'pending'}/>     
            {item.text}
            <span><button onClick={this.deleteNodeInternal} data-element={this.state.defaltValue} data-id={item.id}>delete node</button></span>
        </div>);
    }
    return (<div> 
        {list1?list1:(<div>add list here</div>)}
        <input onChange={this.addNodeNameInternal} type="text" placeholder="add bucket node" />
        <button onClick={this.addNodeInternal}>add node List</button>
        </div>)
}
}
function mapStatetoProps(state) {
    return {
        activeBucket: state.todoList
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addNode: (data) => dispatch(addNodeAction(data)),
        deleteNode: (data) => dispatch(deleteNodeAction(data)),
        updateNode: (data) => dispatch(updateStateAction(data))
    }, dispatch)
};
export default connect(mapStatetoProps,mapDispatchToProps)(SubList);
