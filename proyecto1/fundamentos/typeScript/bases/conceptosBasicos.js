{
    //console.log("hi there, I'm typescript");
    // asignacion inplicita
    let miVarible = "abc";
    miVarible = "luisa";
    let miNumero = 20;
    miNumero = 30;
    // declaracion explicita
    let miNumero2;
    miNumero2 = 4.666;
    // tipos de datos
    let numero;
    let texto;
    let boleano;
    let indefinido;
    let nulo;
    numero = 2;
    texto = "hola";
    boleano = false;
    indefinido = undefined;
    nulo = null;
    // tipo de datos especiales
    let arreglo;
    arreglo = [10, 70, 35];
    let arreglo2;
    arreglo2 = ["david"];
    let desconocido;
    let cualquiera;
    desconocido = 30;
    desconocido = "david";
    desconocido = false;
    desconocido = undefined;
    cualquiera = 30;
    const constante = 30;
    // objetos
    let miObjeto;
    let miObjetoCarro;
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
    let returno;
    returno = mifuncion();
    const mifuncion2 = (num, num2) => {
        return num + num2;
    };
    returno = mifuncion2(5, 2);
    console.log(returno);
}
