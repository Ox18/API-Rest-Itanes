import Connection from './connection';

class LugarModel{
    static get(){
        return new Promise((resolve, reject)=>{
            const db = Connection.getDB();
            const sql = "select * from lugar";
            const params:any[] = [];
            db.all(sql, params, (err, rows)=>{
                if(err){
                    reject(err);
                }else{
                    resolve({ ...rows });
                }
            });
        });
    }
    static getById(id:number){
        return new Promise((resolve, reject)=>{
            const db = Connection.getDB();
            const sql = "select * from lugar where id = ?";
            const params:any[] = [id];
            db.all(sql, params, (err, rows)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        });
    }
    static getByIdPaquete(id:number){
        return new Promise((resolve, reject)=>{
            const db = Connection.getDB();
            const sql = "select * from lugar where idPaquete = ?";
            const params:any[] = [id];
            db.all(sql, params, (err, rows)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        });
    }
};

export = LugarModel;
