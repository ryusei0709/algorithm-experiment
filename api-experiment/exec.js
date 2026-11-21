const endpoint = 'https://jsonplaceholder.typicode.com';

const fetchPostLists = async () => {
  const response = await fetch(`${endpoint}/posts`);
  return response.json();
};

const fetchTodosLists = async () => {
  const response = await fetch(`${endpoint}/todos`);
  return response.json();
};

const fetchUsers = async () => {
  const response = await fetch(`${endpoint}/users`);
  return response.json();
};

const toDoUserCompleteRanking = async () => {
  console.time('TOTAL');

  // =================================
  // 1. API取得時間
  // =================================
  console.time('API TOTAL');

  console.time('GET /users');
  const usersJson = await fetchUsers();
  console.timeEnd('GET /users');

  console.time('GET /todos');
  const todosJson = await fetchTodosLists();
  console.timeEnd('GET /todos');

  console.time('GET /posts');
  const postsJson = await fetchPostLists();
  console.timeEnd('GET /posts');

  console.timeEnd('API TOTAL');

  // =================================
  // 2. データ集計時間
  // =================================
  console.time('AGGREGATION');

  const userData = [];

  for (let i = 0; i < usersJson.length; i++) {
    const userStart = performance.now();

    const userId = usersJson[i].id;
    const name = usersJson[i].username;

    const userTodos = todosJson.filter((todo) => todo.userId === userId);

    const totalTodos = userTodos.length;

    const completedTodos = userTodos.filter((userTodo) => userTodo.completed === true).length;

    const completeCalc = (completedTodos / totalTodos) * 100;
    const completionRate = Math.round(completeCalc * 100) / 100;

    const postCount = postsJson.filter((post) => post.userId === userId).length;

    const hash = {
      userId,
      name,
      totalTodos,
      completedTodos,
      completionRate,
      postCount,
    };

    userData.push(hash);

    console.log(`USER ${userId}: ${(performance.now() - userStart).toFixed(3)} ms`);
  }

  console.timeEnd('AGGREGATION');

  // =================================
  // 3. ソート時間
  // =================================
  console.time('SORT');

  userData.sort((a, b) => {
    if (a.completionRate !== b.completionRate) {
      return b.completionRate - a.completionRate;
    }

    if (a.totalTodos !== b.totalTodos) {
      return b.totalTodos - a.totalTodos;
    }

    if (a.userId !== b.userId) {
      return a.userId - b.userId;
    }

    return 0;
  });

  console.timeEnd('SORT');

  // =================================
  // 4. 全体の実行時間
  // =================================
  console.timeEnd('TOTAL');

  return userData;
};

toDoUserCompleteRanking()
  .then((res) => {
    console.table(res);
  })
  .catch(console.error);
