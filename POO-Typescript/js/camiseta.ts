//interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//decorador
 function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampado = function():void{
            console.log("Camiseta estampada con el logo de " + logo);
        }
    }
 }

//clase padre
@estampar('Gucci')
class Camiseta implements CamisetaBase{

    //PROPIEDADES O ATRIBUTOS
    private color: string;
    private marca: string;
    private precio: number;

    //METODOS
    constructor(color, marca, precio){
        this.color = color;
        this.marca = marca;
        this.precio = precio;
    }
        //color
        public setColor(color){
            this.color = color;
        }
        public getColor(){
            return this.color;
        }

        //marca
        public setMarca(marca){
            this.marca = marca;
        }
        public getMarca(){
            return this.marca;
        }

        //color
        public setPrecio(precio){
            this.precio = precio;
        }
        public getPrecio(){
            return this.precio;
        }
}

//clase hija
class Sudadera extends Camiseta {
    private capucha: boolean;

    public setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    public getCapucha():boolean{
        return this.capucha;
    }
}

var camisetaJulio = new Camiseta("Verde","Adidas",250);
//camisetaJulio.setColor("Roja");
console.log(camisetaJulio);
camisetaJulio.estampado();

var sudaderaJulio = new Sudadera("roja","nike",300);
sudaderaJulio.setCapucha(true);
console.log(sudaderaJulio);
