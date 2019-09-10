import React from 'react';

export const todos = [{
    item: 'Learn about reducers',
    completed: false,
    id: 0
  },
  {
      item: 'Make a TodoList',
      completed: false,
      id: 1
  },
  {
      item: 'Make components',
      completed: false,
      id: 2
  }];

export const reducer = (state, action) => {
    switch(action.type){
        case 'add': 
        return
    }
};