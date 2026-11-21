const endpoint = 'https://jsonplaceholder.typicode.com';

const fetchJson = async (path) => {
  const response = await fetch(`${endpoint}${path}`);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};

const getTopUsers = async (limit = 5) => {
  console.time('TOTAL');

  // =================================
  // 1. API取得時間
  // =================================
  console.time('API TOTAL');

  console.time('GET /users');
  console.time('GET /todos');
  console.time('GET /posts');

  const [users, todos, posts] = await Promise.all([
    fetchJson('/users').finally(() => console.timeEnd('GET /users')),
    fetchJson('/todos').finally(() => console.timeEnd('GET /todos')),
    fetchJson('/posts').finally(() => console.timeEnd('GET /posts')),
  ]);

  console.timeEnd('API TOTAL');

  // =================================
  // 2. TODO集計
  // =================================
  console.time('TODO AGGREGATION');

  const todoMap = new Map();

  for (const todo of todos) {
    if (!todoMap.has(todo.userId)) {
      todoMap.set(todo.userId, {
        totalTodos: 0,
        completedTodos: 0,
      });
    }

    const stats = todoMap.get(todo.userId);
    stats.totalTodos++;

    if (todo.completed) {
      stats.completedTodos++;
    }
  }

  console.timeEnd('TODO AGGREGATION');

  // =================================
  // 3. 投稿集計
  // =================================
  console.time('POST AGGREGATION');

  const postMap = new Map();

  for (const post of posts) {
    postMap.set(post.userId, (postMap.get(post.userId) ?? 0) + 1);
  }

  console.timeEnd('POST AGGREGATION');

  // =================================
  // 4. ユーザーデータ生成
  // =================================
  console.time('USER MAPPING');

  const result = users.map((user) => {
    const stats = todoMap.get(user.id) ?? {
      totalTodos: 0,
      completedTodos: 0,
    };

    const { totalTodos, completedTodos } = stats;

    const completionRate = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 10000) / 100;

    return {
      userId: user.id,
      name: user.name,
      totalTodos,
      completedTodos,
      completionRate,
      postCount: postMap.get(user.id) ?? 0,
    };
  });

  console.timeEnd('USER MAPPING');

  // =================================
  // 5. ソート
  // =================================
  console.time('SORT');

  result.sort((a, b) => {
    if (a.completionRate !== b.completionRate) {
      return b.completionRate - a.completionRate;
    }

    if (a.completedTodos !== b.completedTodos) {
      return b.completedTodos - a.completedTodos;
    }

    return a.userId - b.userId;
  });

  console.timeEnd('SORT');

  // =================================
  // 6. 全体の実行時間
  // =================================
  console.timeEnd('TOTAL');

  return result.slice(0, limit);
};

getTopUsers(5)
  .then((res) => {
    console.table(res);
  })
  .catch(console.error);
