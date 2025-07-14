import { useParams } from "react-router-dom";

const posts = [
  {
    userId: 1,
    id: 1,
    img: "https://http.cat/200",
    post: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    comment: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    todos: "Do something nice for someone you care about" 
  },
  {
    userId: 2,
    id: 2,
    img: "https://http.cat/100",
    post: "qui est esse",
    comment: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    todos: "Memorize a poem"
  },
  {
    userId: 1,
    id: 3,
    img: "https://http.cat/300",
    post: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    comment: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    todos: "Watch a classic movie"
  },
  {
    userId: 2,
    id: 4,
    img: "https://http.cat/400",
    post: "eum et est occaecati",
    comment: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    todos: "Watch a documentary"
  },
  {
    userId: 1,
    id: 5,
    img: "https://http.cat/500",
    post: "nesciunt quas odio",
    comment: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    todos: "Go see a Broadway production"
  }
]

export const usePosts = () => {
  const { userId, id } = useParams();
  if (userId) {
    return posts.filter((post) => post.userId === Number(userId));
  }
  if (id) {
    return posts.filter((post) => post.id === Number(id));
  }
  return posts;
};
