clone = function (obj) {
    var clonedObject;

    //Handle null, undefined or primitive types
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    //Handle Array
    if(obj instanceof Array){
        clonedObject = [];

        for(var i = 0; i < obj.length; i++){
            //clone every element in the array
            clonedObject[i] = clone(obj[i]);
        }

        return clonedObject;
    }

    //Handle Date
    if(obj instanceof Date) {
        clonedObject = new Date();
        clonedObject.setDate(obj.getDate());

        return clonedObject;
    }

    //Handle Object
    if(obj instanceof Object) {
        clonedObject = {};

        //iterate object properties
        for(var attr in obj){
            if(obj.hasOwnProperty(attr)){
                //clone every propery to the new object
                clonedObject[attr] = clone(obj[attr]);
            }
        }

        return clonedObject;
    }

    //If you hit this code something in VERY Wrong :)
    throw new Error('Object not cloned');
}