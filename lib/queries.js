const queries = {
    getUserById: async (connection, id) => {
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id = ?',[id]);
        return rows[0];
    },
    getUsers: async (connection) => {
        const [rows, fields] = await connection.execute('SELECT * FROM users ORDER BY id DESC');
        return rows;
    },
    deleteUserById: async (connection, id) => {
        try {
            await connection.query('DELETE from transactions t WHERE t.user_id = ?',[id]);
            await connection.query('DELETE from bet_tickets bt WHERE bt.user_id = ?',[id]);
            await connection.query('DELETE from user_bets ub WHERE ub.user_id = ?',[id]);
            await connection.query('DELETE from user_logins ul WHERE ul.user_id = ?',[id]);
            await connection.query('DELETE from favorites f WHERE f.user_id = ?',[id]);
            await connection.query('DELETE from users u WHERE u.id = ?',[id]);
            console.log(`Se han eliminado los datos para el usuario con ID: ${id}.`);
        } catch (error) {
            console.log(`Error al eliminar los datos para el usuario con ID: ${id}. ${error.message}`);
        }
    },
    deleteUserFirebaseByEmail: async (connection, email) => {
        try {
            const userRecord = await connection.auth().getUserByEmail(email);
            await connection.auth().deleteUser(userRecord.uid);
            console.log('El usuario de firebase ha sido eliminado exitosamente');
        } catch (error) {
            console.error('Error al eliminar el usuario de firebase:', error);
        }
    },
};

module.exports = queries;
