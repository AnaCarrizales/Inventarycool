import Product from './product.js'
import Inventario from './inventario.js'
import Acciones from './acciones.js'

class App
{
    constructor()
    {
        this.btnNav = document.getElementById('btnNav');
        this.btnNav.addEventListener('click', this.navProducto);

        this.btnRegistrar = document.getElementById('btnRegistrar');
        this.btnRegistrar.addEventListener('click', this.agregar);

        this.lista = document.getElementById('btnListar');
        this.listInverse = document.getElementById('btnInvert');
        this.btnInsertar = document.getElementById('btnInsertar');

        this.lista.addEventListener('click', this.listar);
        this.listInverse.addEventListener('click', this.invertido);
        this.btnInsertar.addEventListener('click', this.insertarProducto);

        this.inventario = new Inventario()

        this.tabla = document.getElementById('forTable');
        this.acciones = document.getElementById('actions');
        this.btnEliminar = document.getElementById('btnEliminar');
        this.btnEliminar.addEventListener('click', this.deleteProduct);
    }

    navProducto = () =>{
        let id = document.getElementById('id').value;
        let accion = new Acciones(this.tabla, this.acciones, this.inventario);
        let lkProduct = this.inventario.navId(id);

        if(lkProduct !== null)
        {
            accion.Acciones(`El producto ${lkProduct.getNombre()} está en existencia`)
        }
    }

    createProduct = () => {
        let id = document.getElementById('id').value;
        let nombre = document.getElementById('nombre').value;
        let cantidad = document.getElementById('cantidad').value;
        let costo = document.getElementById('costo').value;
        if(id && nombre && cantidad && costo)
        {
            let product = new Product(id, nombre, cantidad, costo)
            return product;
        }
        return null
    }

    insertarProducto = () => {
        let inserted = false;
        let product = this.createProduct()
        let p = document.getElementById('insertValue').value;

        if(product !== null)
        {
            inserted = this.inventario.insertarProducto(product, p);
        }

        if(product == null)
        {
            alert('Ningún producto fue ingresado');
        }

        if(inserted)
        {
            let insertar = new Acciones(this.tabla, this.acciones, this.inventario);
            insertar.Acciones(`Se ha insertado el producto ${product.getNombre()} en la posición ${p}`)
        }
    }

    agregar = () =>{
        let inc = new Acciones(this.tabla, this.acciones, this.inventario);
        let product = this.createProduct()
        if(product == null)
        {
            inc.Acciones('Producto no agregado, faltan valores por escribir');
            return null
        }

        let added = this.inventario.agregar(product);
        console.log(added);
            if(added !== null && added !== false)
            {
                this.inventario.getOrderInventary()
                inc.Acciones(`El producto ${product.getNombre()} se ha agregado`)
            } 
            else if(added === null)
            {
                inc.Acciones(`El producto ${product.getNombre()} no se ha agregado, el inventario está lleno`)
            } 
            else if(added === false)
            {
                inc.Acciones(`El producto ${product.getNombre()} con ID ${product.getId()} ya ha sido agregado`)
            }
    }

    deleteProduct = () => {
        let eliminar = new Acciones(this.tabla, this.acciones, this.inventario);
        let idElim = document.getElementById('id').value;
        let pass = this.inventario.deleteProduct(idElim);
        if(pass == null)
        {
            eliminar.Acciones("No fue ingresado un ID");
            return null;
        } 
        else if(pass == false)
        {
            eliminar.Acciones(`el ID ${idElim} no existe en el inventario`)
            return false
        }

        eliminar.Acciones(`el producto ${pass.getNombre()} con id ${pass.getId()} fue eliminado`)
    }

    listar = () => {
        let listar = new Acciones(this.tabla, this.acciones, this.inventario.getArray());
        listar.listado()
    }

    invertido = () => {
        let listaInvertida = new Acciones(this.tabla, this.acciones, this.inventario.getArray());
        listaInvertida.listInverse()
    }
}

new App();