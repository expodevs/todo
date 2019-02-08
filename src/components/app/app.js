import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAddItem from '../todo-add-item';

import './app.css';

export default class App extends Component {
    maxID = 1;
    state = {
        todoData: [
            this.createTodoItem('Drink cofee'),
            this.createTodoItem('Awesome app'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxID++
        }
    }

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
            const newItem = this.createTodoItem(titleLabel);
            const newChangeArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newChangeArr
            };
        })
    };

    toggleProperties = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
      this.setState(({todoData}) => {
          return {
              todoData: this.toggleProperties(todoData, id, 'important')
          }
      })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperties(todoData, id, 'done')
            }
        })
    };

    visibleAll = () => {
        this.setState(({todoData}) => {
            console.log(todoData);
            return {
                todoData: todoData
            }
        })
    };

    visibleDone = () => {
        this.setState(({todoData}) => {
            const newArr = todoData.filter((item) => {
                return item.done
            });
            console.log(newArr);
            return {
                todoData: newArr
            }
        })
    };

    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter
                        visibleDone={this.visibleDone}
                        visibleAll={this.visibleAll}/>
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    visibleDone={this.visibleDone}/>
                <TodoAddItem onAddItem={this.onAddItem} />
            </div>
        );
    }


};
