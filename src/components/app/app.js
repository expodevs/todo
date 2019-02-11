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
        term: '',
        filter: 'all',
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

    filterItems = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            case 'important':
                return items.filter((item) => item.important);
            default:
                return items;
        }
    };

    searchText(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    };

    searchTextChange = (term) => {
        this.setState({term});
    };
    onSearchChange = (filter) => {
        this.setState({filter});
    };

    render() {
        const {todoData, term, filter} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const resultSearch = this.filterItems(
            this.searchText(todoData, term),
            filter
        );
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel searchText={this.searchTextChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onSearchChange={this.onSearchChange}/>
                </div>

                <TodoList
                    todos={resultSearch}
                    onDeleted={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <TodoAddItem onAddItem={this.onAddItem} />
            </div>
        );
    }


};
