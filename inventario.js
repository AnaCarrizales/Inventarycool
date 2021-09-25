export default class Inventario
{
    constructor()
    {
        this.inventario = new Array();
    }

    getArray()
    {
      return this.inventario;
    }

    getOrderInventary()
    {
      let pos = this.inventario.length - 1;
      for (let i = 0; i < this.inventario.length; i++) 
      {
        if (this.inventario[pos].getId() < this.inventario[i].getId()) 
        {
          let value = this.inventario[pos];
          this.inventario[pos] = this.inventario[i];
          this.inventario[i] = value;
        }
      }
    }

    agregar(product)
    {
      let added = false;
      if(this.inventario.length <= 0)
      {
        added = this.inventario.push(product);
      } 
      else if(this.inventario.length < 20)
      {
        let pass = this.noRepId(product);
        if(pass === true)
        {
          added = this.inventario.push(product);
        }
      } 
      else 
      {
        added = null;
      }
      return added;
    }

    insertarProducto(product, pos) 
    {
      if(!this.limite(pos))
      {
        return false;
      }

      let max = this.inventario.length + 1; //
      let cPos = pos - 1;

      for(; max > cPos; max--)
      {
        this.inventario[max] = this.inventario[max - 1];
      }
      this.inventario[cPos] = product;
      return true;
    }

    limite(num)
    {
        
      if(num <= 0)
      {
        alert('La posición 0 no existe (1, 2, n)')
        return false;
      }
      if(num > this.inventario.length)
      {
        alert('No se puede insertar en a posición que no existe');
        return false;
      }
      return true;
    }

    navId(id) 
    {
        id = Number(id);
        let item = null;
        for (let i = 0; i < this.inventario.length; i++) 
        {
          if (this.inventario[i].getId() == id) 
          {
            item = this.inventario[i]
          }
        }
        return item;
    }

    noRepId(product)
    {
        let pass = true;
        for(let i=0; i<this.inventario.length; i++)
        {
          if(this.inventario[i].getId() === product.getId())
          {
            pass = false;
          }
        }
        return pass
    }

    deleteProduct(idELim)
    {
        if(!idELim)
        {
            return null;
        }

        if(!this.navId(idELim))
        {
            return false;
        }

        let posicion = this.getPositionId(idELim)
        let sigpos = posicion + 1;

        while(sigpos < this.inventario.length)
        {
            let move = this.inventario[posicion]
            this.inventario[posicion] = this.inventario[sigpos];
            this.inventario[sigpos] = move
            posicion++;
            sigpos++;
        }
        return this.inventario.pop()
    }
    
    getPositionId(id)
    {
      for(let i = 0; i < this.inventario.length; i++)
      {
        if(this.inventario[i].getId() == id)
        {
          return i;
        }
      }
    }
}