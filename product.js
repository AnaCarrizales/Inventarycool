export default class Product 
{
    constructor(id, name, cantidad, costo) 
    {
      this.id = Number(id);
      this.name = name;
      this.mount = Number(cantidad);
      this.costo = Number(costo);
      this.valorMercancia = this.mount * this.costo;
    }

    getId() 
    {
      return this.id;
    }

    getNombre() 
    {
      return this.name;
    }
    
    getCantidad() 
    {
      return this.mount;
    }

    getCosto() 
    {
      return this.costo;
    }

    getValorTotal() 
    {
        return this.valorMercancia;
    }
}