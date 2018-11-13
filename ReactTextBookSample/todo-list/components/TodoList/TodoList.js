import React, { Component } from 'react';
import TodoItem from '../TodoItem';
class TodoList extends Component {

    shouldComponentUpdate(nextProps,nextState){
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const {todos, onToggle,onRemove} = this.props;
        const todoList = todos.map(
                todo =>(
                    // todos 의 일반 배열이 아닌
                    // Map 으로 구성된 Immutable 이기 때문에
                    // todo.id가 아닌 todo.get('id'); 형태로 변경되어야함
                    // <TodoItem
                    //     key={todo.id}
                    //     done={todo.done}
                    //     onToggle={() => onToggle(todo.id)}
                    //     onRemove={() => onRemove(todo.id)}>
                    //     {todo.text}
                    //     </TodoItem>
                    <TodoItem
                     key={todo.get('id')}
                     done = {todo.get('done')}
                     onToggle={()=>onToggle(todo.get('id'))}
                     onRemove={()=>onRemove(todo.get('id'))}
                    >
                     {todo.get('text')}
                    </TodoItem> 
                )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;