var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict'); // to test if the reducers don't change the parameters

describe('Reducers', () => {
  describe('authReducer', () => {
    it('should set uid on login', () => {
      var action = {
        type: 'LOGIN',
        uid: 0
      };

      var res = reducers.authReducer(df({}), df(action));

      expect(res).toEqual({uid:action.uid});
    });

    it('should unset uid on logout', () => {
      var action = {
        type: 'LOGOUT',
      };

      var res = reducers.authReducer(df({uid:0}), df(action));

      expect(res).toEqual({});
    });
  });

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
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt : 0
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing to dos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 0
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should update todo', () => {
      var updates = {
        completed: false,
        completedAt: null
      };

      var todos = [{
        id: 1,
        text: 'Thing to do',
        createdAt: 0,
        completedAt: 0,
        completed: true
      }];

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should clear to dos on logout', () => {
      var action = {
        type: 'LOGOUT'
      };

      var todos = [{
        id: 1,
        text: 'Thing to do',
        createdAt: 0,
        completedAt: 0,
        completed: true
      }];

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(0);
    });
  });
});
