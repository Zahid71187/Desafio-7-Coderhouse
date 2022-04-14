class Productos {

    constructor(options, tabla) {
        this.knex = require('knex')(options)
        this.tabla = tabla
    }

    async listar(id) {
        let producto = []
        await this.knex.from(this.tabla).select('*').where('id', '=', id)
         .then(rows => {
             for( let row of rows){
                 producto.push(row)
             }
         })
         .catch(err => console.error(err))
        // const buscado = objs.find(o => o.id == id)
        return producto
    }

    async listarAll() {
        try {
            let productos = []
            await this.knex.from(this.tabla).select('*')
                .then(rows => {
                    for (let row of rows) {
                       productos.push(row)
                    }
         })
         .catch(err => console.error(err))
            return productos
        } catch (error) {
            return []
        }
    }

    async guardar(obj) {

        await this.knex(this.tabla).insert(obj)
            .then( () => { 
                console.log('Insertado ')
            })
            .catch( err => {
                console.log('Error: ', err)
            })
    }

    async actualizar(elem, id) {
        knex
        .from(this.tabla)
        .where('id', id)
        .update({ title: elem.title, price: elem.price, thumbnail: elem.thumbnail })
        .then(() => {
            console.log('tabla actualizada')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    async borrar(id) {
        knex
        .from(this.tabla)
        .where('id', id)
        .del()
        .then(() => {
            console.log('Registro eliminado')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    async borrarAll() {
        knex
        .from(this.tabla)
        .del()
        .then(() => {
            console.log('Registros eliminados')
        })
        .catch((err) => {
            console.log(err)
        })
}
}

module.exports = Productos