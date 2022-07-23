import React, { FC, useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { getAllPosts, addPosts } from './postsSlice';
import { IPosts } from '../../interface/posts';

const Posts: FC = () => {
    const getPosts = useSelector(getAllPosts);
    const postsData = useSelector((state) => state);
    console.log("postsData", postsData);

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastname] = useState<string>("");

    const handleAdd = () => {
        if (firstName && lastName) {
            dispatch(addPosts(firstName, lastName));
            setFirstName("");
            setLastname("");
        }
    }
    return (
        <>
            <div>
                <h4>Form</h4>
            </div>
            <div>
                <label>fname : </label>
                <input type={"text"} value={firstName} name='fname' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value)
                }} />
            </div>
            <div>
                <label>lname : </label>
                <input type={"text"} value={lastName} name='lname' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLastname(e.target.value);
                }} /><br />
            </div>
            <div>
                <button onClick={handleAdd}>Submit</button>
            </div>

            <div>
                <table border={1}>
                    <caption>All post</caption>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>

                    {getPosts?.map((dd: IPosts) => {
                        return (
                            <tr>
                                <td>{dd?.id}</td>
                                <td>{dd?.firstName}</td>
                                <td>{dd?.lastName}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default Posts