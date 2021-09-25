export default class Acciones
{
    constructor(divTable, divActions, inventario)
    {
        this.div = divTable;
        this.divActions = divActions;
        this.inventario = inventario;
    }

    tabla()
    {
      let table = document.getElementById('tbProducts');
      table.innerHTML = '<tr><th id="product">Producto</th><th id="id">ID</th><th id="cantidad">Cantidad</th><th id="costo">Costo</th><th id="totalPrice">Precio Total</th></tr>'
    }

    _mostrar(product)
    {
      if(product)
      {
        let table = document.getElementById('tbProducts')
        let row = table.insertRow(-1);
        let colId = row.insertCell(0);
        let colNombre = row.insertCell(1);
        let colCantidad = row.insertCell(2);
        let colCosto = row.insertCell(3)
        let colValorTotal = row.insertCell(4);

        row.setAttribute('id', `row${product.getId()}`);
        colNombre.setAttribute('id', `colName${product.getId()}`);
        colId.setAttribute('id', `colId${product.getId()}`);
        colCantidad.setAttribute('id', `colMount${product.getId()}`);
        colCosto.setAttribute('id', `colPrice${product.getId()}`);
        colValorTotal.setAttribute('id', `colTotalPrice${product.getId()}`);
      
        colNombre.innerHTML = product.getNombre();
        colId.innerHTML = product.getId();
        colCantidad.innerHTML = product.getCantidad();
        colCosto.innerHTML = product.getCosto();
        colValorTotal.innerHTML = product.getValorTotal();
      }
    }

    listado()
    {
      this.tabla()
        if(this.inventario.length !== 0)
        {
          for(let i=0; i<this.inventario.length; i++)
          {
            if(this.inventario[i] !== null)
            {
              let product = this.inventario[i]
              this._mostrar(product)
            }
          }
        }
    }
    
      listInverse()
      {
        let max = this.inventario.length
        let count = max
        this.tabla()
        if(this.inventario.length !== 0)
        {
          for(let i=0; max>i; i++)
          {
            count--
            if(this.inventario[count] !== null)
            {
              this._mostrar(this.inventario[count])
            }
          }
        }
    }

    Acciones(action){
      this.divActions.innerHTML += `<label>${action}</label>`
    }
}