class ObjStorageClass {
    constructor () {
        this.obj = {};
    }
    addValue (key, value) {
        this.obj[key] = value;
    }
    getValue (key) {
        if (key in this.obj) {
            return this.obj[key]
        } 
    }
    deleteValue (key) {
        let result = false;
        if (key in this.obj) {
            delete this.obj[key];
            result = true;
        }
        return result;
    }
    getKeys () {
        return Object.keys(this.obj);
    }
}

let drinkStorage = new ObjStorageClass();

function drinkInformation() {
    let drinkName = prompt('Введите название напитка', '');
    let isAlcoholic = confirm('Напиток алкогольный?');
    let drinkRecipe = prompt('Введите рецепт напитка', '');
    let alco = (isAlcoholic) ? 'да' : 'нет';
    drinkStorage.addValue(drinkName, [alco, drinkRecipe]);
}

function getDrinkInformation() {
    let drinkName = prompt('Введите название напитка', '');
    let info = drinkStorage.getValue(drinkName);
    if (info) {
        console.log(`напиток: ${drinkName}
алкогольный: ${info[0]}
рецепт приготовления: ${info[1]}`);
    } else {
        console.log('такой напиток отсутствует');
    }

}

function deleteDrinkInformation() {
    let drinkName = prompt('Введите название напитка', '');
    let deleteDrink = drinkStorage.deleteValue(drinkName);
    if (deleteDrink) {
        console.log('напиток удален');
    } else {
        console.log('такой напиток отсутствует');
    }
}

function getDrinkName() {
    let allDrinkName = drinkStorage.getKeys();
    for (let i of allDrinkName) {
        console.log(i);
    } 
}