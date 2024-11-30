import { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import { fetchUsers, User } from './utils';

export default function Demo() {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);

            const users = await fetchUsers(search);
            setUsers(users);

            setLoading(false);
        };
        loadUsers();
    }, [search]);

    return (
        <div className='tutorial'>
            <SearchBar onChange={setSearch} />
            {loading && <div>Loading...</div>}
            {!loading &&
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>;
                })}
        </div>
    );
}