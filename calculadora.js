export function sumar(a, b) {
    try {
        const numA = Number(a);
        const numB = Number(b);
        if (Number.isNaN(numA) || Number.isNaN(numB)){
            throw new Error ("El valor ingresado debe ser numerico");   
        }
        return numA + numB;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export function restar(a, b) {
    try {
        const numA = Number(a);
        const numB = Number(b);
        if (Number.isNaN(numA) || Number.isNaN(numB)){
            throw new Error ("El valor ingresado debe ser numerico");   
        }
        return numA - numB;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export function multiplicar(a, b) {
    try {
        const numA = Number(a);
        const numB = Number(b);
        if (Number.isNaN(numA) || Number.isNaN(numB)){
            throw new Error ("El valor ingresado debe ser numerico");   
        }
        return numA * numB;
    } catch (error) {
        console.error(error.message);
        return null;
    }

};


export function dividir(a, b) {
    try {
        const numA = Number(a);
        const numB = Number(b);
         if (Number.isNaN(numA) || Number.isNaN(numB)) {
            throw new Error("El valor ingresado debe ser numérico");
        }

        if (numA ===0 ||numB === 0) {
            throw new Error("No se puede dividir por 0");
        }
        return numA / numB;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
export function info(){
    console.log("Con el presente modulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir")
};
export default info();

