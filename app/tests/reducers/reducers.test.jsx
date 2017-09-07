var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict'); // to test if the reducers don't change the parameters

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should change showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new to do', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Thing to do'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle completed if is incompleted', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      var todos = [{
        id: 1,
        text: 'Thing to do',
        createdAt: 0,
        completedAt: undefined,
        completed: false
      }];

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should toggle incompleted if is completed', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      var todos = [{
        id: 1,
        text: 'Thing to do',
        createdAt: 0,
        completedAt: 0,
        completed: true
      }];

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toNotExist();
    });
  });
});
