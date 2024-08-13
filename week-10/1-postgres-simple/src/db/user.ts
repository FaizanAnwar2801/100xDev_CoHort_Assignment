import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertUser = `INSERT INTO users (username, password, name) 
    VALUES ($1, $2, $3) RETURNING username, password, name`;
    const User = [username, password, name]
    let res = await client.query(insertUser, User)

    return res.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getQuery = `SELECT * FROM users WHERE id = $1`;
    let res = await client.query(getQuery, [userId])
    const ans = {
        id:userId,
        username:res.rows[0].username,
        name:res.rows[0].name
    }
    return ans;
}
