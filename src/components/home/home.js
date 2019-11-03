import React from 'react';
import './home.css';
import Bucket from '../bucketList/bucketlist';
import {connect} from 'react-redux';
import {addBucketAction,deleteBucketAction} from '../../actions/index';
import {bindActionCreators} from 'redux';
import SubList from '../subTodoList/subList';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bucketName: "bucket1",
            selectedBucket: ''
        };
    }
    deleteHandler = (event) => {
        console.log(event.target.id);
        let newObj = Object.assign({}, this.props.todoList);
        delete newObj[event.target.id];
        console.log(newObj);
        this.props.deleteBucket(newObj);
    }
    getBucketName = (event) => {
        this.setState({
            bucketName: event.target.value
        });
    }
    addBucketIternal = () => {
        var obj = {
            [this.state.bucketName]: []
        };
        this.props.addBucket(obj);
    }
    selectBucket = (event) => {
        this.setState({
            selectedBucket: event.target.innerHTML
        })
    }
    render(){
        var lst = Object.keys(this.props.todoList).map((key, idx)=>
        {
            return (<Bucket getBucket={this.selectBucket} id={key} key={idx} deleteBucket={this.deleteHandler}>{key}</Bucket>)
        });
        return(
            <div>
            <h2 className="bucketListText">Bucket List</h2>
            <div className="listWrapper">
            <div className="bucketMenu">
            <ul className="bucketList">
            {lst}
            </ul>
            <input onChange={this.getBucketName} type="text" placeholder="add bucket" />
            <button onClick={this.addBucketIternal}>Add Bucket</button>
            </div>
            <div className="todoList">
                <SubList selectedBucket={this.state.selectedBucket}></SubList>
                </div>

            </div>
            </div>

        )
    }
}
function mapStatetoProps(state) {
    return {
        todoList: state.todoList
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBucket: (data) => dispatch(addBucketAction(data)),
        deleteBucket: (data) => dispatch(deleteBucketAction(data))
    }, dispatch)
};
export default connect(mapStatetoProps, mapDispatchToProps)(Home);