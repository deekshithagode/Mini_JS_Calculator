function operation(clickid)
{
    var v1 = parseFloat(documentById("op1").value)
    var v2 = parseFloat(documentById("op2").value)
    if(isNaN(v1) || isNaN(v2))
    {
        alert("enter a valid input")
    }
    else if(clickid == "add")
    {
        document.getElementById("output").value = v1 + v2;
        console.log("additon opertion performed")
    }

    else if(clickid == "sub")
    {
        document.getElementById("output").value = v1 - v2;
        console.log("additon opertion performed")
    }

    else if(clickid == "mul")
    {
        document.getElementById("output").value = v1 * v2;
        console.log("additon opertion performed")
    }
     

    else if(clickid == "div")
    {
        document.getElementById("output").value = v1 / v2;
        console.log("additon opertion performed")
    }

    else if(clickid == "reset")
    {
        document.getElementById("op1").value = ""
        document.getElementById("op2").value = ""


        document.getElementById("output").value = ""
    }

}
