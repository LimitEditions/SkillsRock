import React, { useState, useEffect } from "react";
import './GetUsers.css';

function GetUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

        // Функция для загрузки случайных пользователей
        const fetchRandomUsers = async () => {
            setIsLoading(true);
            setError(null);
    
            try {
                const response = await fetch('https://randomuser.me/api/?results=10');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных');
                }
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

// используем функцию fetchRandomUsers() при монтировании компонента
    useEffect(() => {
        fetchRandomUsers();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to upload users: {error}</p>;
    }

    return (
        <div className="users">
            <h1>Users</h1>
            <ol className="users__list">
                {users.map((user, index) => (
                    <li className="user" key={index}>
                    <h3>Name: {user.name.first}</h3>
                    <h4>email: {user.email}</h4>
                    <img src={user.picture.thumbnail} alt={user.name.first}/>
                </li>))}
            </ol>

        </div>
    )
}

export default GetUsers;