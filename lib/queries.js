const queries = {
    getUserById: async (connection, id) => {
        const [rows, fields] = await connection.execute(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );
        return rows[0];
    },
    getUsers: async (connection) => {
        const [rows, fields] = await connection.execute(
            'SELECT * FROM users ORDER BY id DESC'
        );
        return rows;
    },
};

module.exports = queries;
