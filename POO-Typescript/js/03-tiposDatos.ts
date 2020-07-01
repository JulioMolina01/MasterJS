//string
var cadena: string = "JulioMolina";

//number
var numero: number = 12;

//boolean
var bandera: boolean = true;

//cualquier valor
var cualquiera: any = "hola";


//arreglos
var arreglo1: Array<string> = ["php","java","c++"]
var arreglo2: Array<any> = ["php","java",12]

var arreglo3: number[] = [12,13,14]
var arreglo4: any[] = ["doce",12]


//dos o mas tipos de valor en una variable
var variableMultiValor: string | number = "valor";
variableMultiValor = 12;


//crear tu tipo de variable
type tipoPersonalizado = string | number;
var variableTest: tipoPersonalizado = 12;

