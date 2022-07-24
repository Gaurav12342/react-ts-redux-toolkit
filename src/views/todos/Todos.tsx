import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, status, } from '../todos/todoSlice';

const Todos: FC = () => {
    const dispatch = useDispatch();
    const todosData = useSelector((state: any) => state.todo);
    const todosStatus = useSelector(status);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch, todosStatus]);
    return (
        <div>
            <div>
                <table border={1}>
                    <caption>All post</caption>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>

                    {todosData.todos?.map((data: any, index: number) => {
                        return (
                            <tr>
                                <td>{data?.id}</td>
                                <td>{data?.name}</td>
                                <td>{data?.username}</td>
                                <td>{data?.email}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Todos