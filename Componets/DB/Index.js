import * as SQLite from "expo-sqlite"


const db = SQLite.openDatabase("session.db")


export const init = () =>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql("CREATE TABLE IF NOT  EXISTS session (locaid TEXT PRIMARY_KEY NOT NULL, email TEXT NOT NULL, token NOT NULL)",
            [],
            ()=>resolve(),
            (_,error)=>reject(tx, error)
            )
        })
    })
    return promise
}


export const insertSession = ({
    email,
    localId,
    token
}) =>{
    const promise = new Promise ((accept, reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                "INSERT INTO sessions (email, localId, token) VALUE(?, ?, ?):",
                [email, localId, token],
                (_, result) => resolve(result),
                (_,error) => reject(error)
            )
        })
    })
    return promise
}


export const fetchSession = (localId) =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction(tx=>{
            tx.executeSql(
                "SELECT * FROM sessions where localId = ?",
                [localId],
                (_,result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}


export const  deleteSession = (localId) =>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction(tx=>{
            tx.executeSql(
                "DELETE FROM sessions WHERE localId = ?",
                [localId],
                (_,result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}