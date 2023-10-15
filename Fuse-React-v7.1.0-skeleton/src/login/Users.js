import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useRefreshToken from "hooks/useRefreshToken";
import { useParams } from 'react-router-dom';

let udid = localStorage.getItem('id')
const Users = () => {
  

    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const refresh = useRefreshToken

    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
       
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(`http://127.0.0.1:8000/api/authentification/users/detail/${udid}`, {
                   
                headers: { Authorization: `Token ${localStorage.getItem('token')}` }
                
       
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
               
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [udid]);

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
            <button onClick={() => refresh()}>REfresh</button>
        </article>
        
    );
};

export default Users