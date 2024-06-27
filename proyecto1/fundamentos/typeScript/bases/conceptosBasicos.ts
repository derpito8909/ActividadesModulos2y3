{
  //console.log("hi there, I'm typescript");

  // asignacion inplicita
  let miVarible = "abc";
  miVarible = "luisa";

  let miNumero = 20;
  miNumero = 30;

  // declaracion explicita
  let miNumero2: number;
  miNumero2 = 4.666;

  // tipos de datos
  let numero: number;
  let texto: string;
  let boleano: boolean;
  let indefinido: undefined;
  let nulo: null;

  numero = 2;
  texto = "hola";
  boleano = false;
  indefinido = undefined;
  nulo = null;

  // tipo de datos especiales
  let arreglo: Array<number>;
  arreglo = [10, 70, 35];
  let arreglo2: string[];
  arreglo2 = ["david"];
  let desconocido: unknown;
  let cualquiera: any;
  desconocido = 30;
  desconocido = "david";
  desconocido = false;
  desconocido = undefined;
  cualquiera = 30;

  const constante: number = 30;

  // objetos
  let miObjeto: object;

  let miObjetoCarro: {
    id: number;
    marca: string;
    color: string;
    vendido: boolean;
  };

  miObjetoCarro = {
    id: 1,
    marca: "Ferrari",
    color: "rojo",
    vendido: true,
  };

  // funciones
  //function mifuncion() {
  //console.log("funcion");

  const mifuncion = () => {
    console.log("funcion flecha");
  };
  let returno: any;
  returno = mifuncion();

  const mifuncion2 = (num: number, num2: number) => {
    return num + num2;
  };

  returno = mifuncion2(5, 2);
  console.log(returno);
}
