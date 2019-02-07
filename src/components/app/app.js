import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAddItem from '../todo-add-item';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    onDelete = (id) => {
          this.setState(({todoData}) => {
              const idx = todoData.findIndex((el) => el.id === id);
              const todoDataNew = [
                  ...todoData.slice(0, idx),
                  ...todoData.slice(idx + 1)
              ];
              return {
                  todoData: todoDataNew
              }
          })
    };

    onAddItem = (titleLabel) => {
        this.setState(({todoData}) => {
            const newItem = {
                label: titleLabel,
                important: false,
                id: todoData[todoData.length - 1].id + 1
            };
            const newChangeArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newChangeArr
            };
        })
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.onDelete}/>
                <TodoAddItem onAddItem={this.onAddItem} />
            </div>
        );
    }


};
