const canGiveBlood = (donor,receiver) => {
    if (donor == "A-" && (receiver == "A-" || receiver == "A+" || receiver == "AB-" || receiver == "AB+")){
        console.log("Blood is compatible");
    }
    else if (donor == "A+"  && (receiver == "A+" || receiver == "AB+")){
        console.log("Blood is compatible");
    }
    else if (donor == "B-" && (receiver == "B-" || receiver == "B+" || receiver == "AB-" || receiver == "AB+")){
        console.log("Blood is compatible");
    }
    else if (donor == "B+" && (receiver == "B+" || receiver == "AB+")){
        console.log("Blood is compatible");
    }
    else if (donor == "AB-" && (receiver == "AB-" || receiver == "AB+")){
        console.log("Blood is compatible");
    }
    else if (donor == "AB+" && (receiver == "AB+")){
        console.log("Blood is compatible");
    }
    else if (donor == "O-"){
        console.log("Blood is compatible");
    }
    else if (donor == "O+" && (receiver == "A+" || receiver == "B+" || receiver == "AB+" || receiver == "O+")){
        console.log("Blood is compatible");
    }
    else{
        console.log("Blood is not compatible");
    }
}

canGiveBlood("O+","AB-");
//Just change the parameters to test it out