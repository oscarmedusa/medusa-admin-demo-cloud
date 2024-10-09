// src/lib/query-key-factory.ts
var queryKeysFactory = (globalKey) => {
  const queryKeyFactory = {
    all: [globalKey],
    lists: () => [...queryKeyFactory.all, "list"],
    list: (query) => [...queryKeyFactory.lists(), { query }],
    details: () => [...queryKeyFactory.all, "detail"],
    detail: (id, query) => [
      ...queryKeyFactory.details(),
      id,
      { query }
    ]
  };
  return queryKeyFactory;
};

export {
  queryKeysFactory
};
