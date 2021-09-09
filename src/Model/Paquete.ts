import Connection from "./connection";

class PaqueteModel {
  static get() {
    return new Promise((resolve, reject) => {
      const db = Connection.getDB();
      const sql = "select * from paquete";
      const params: any[] = [];
      db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  static getById(id: number) {
    return new Promise((resolve, reject) => {
      const db = Connection.getDB();
      const sql = "select * from paquete where id = ?";
      const params: any[] = [id];
      db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export = PaqueteModel;
