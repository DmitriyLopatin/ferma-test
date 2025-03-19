const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {

  const result = next(action);

  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state.todos));
  localStorage.setItem('filters', JSON.stringify(state.filters));

  return result;
};

export default localStorageMiddleware;