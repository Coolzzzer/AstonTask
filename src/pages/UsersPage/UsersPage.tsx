import { useGetUsersQuery } from "../../entities/post/usersApi";

const UsersPage = () => {
    const { data: users = [], isLoading } = useGetUsersQuery();
    if (isLoading) return <div>Loading...</div>;

    return (
        <ul>
        {users.map((user) => (
          <div key={user.id} style={{margin:"15px"}}>
                Username: {user.username} Name: {user.name},
                <br/>
                Email: {user.email} Phone: {user.phone}
          </div>
        ))}
      </ul>
    )
}
export default UsersPage