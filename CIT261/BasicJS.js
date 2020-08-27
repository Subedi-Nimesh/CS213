function count()
{
    var display = "";
    var nums;
    for(nums = 0; nums < 11; nums++)
    {
        if(nums % 2 == 0){
            display += nums + "<br>";
        }
    }

    document.getElementById("numbers").innerHTML = display;
}

function namesofBuilding() {
    document.getElementById("building").innerHTML= ""
    let buildings = ["Science & Technology Center (STC)", "Thomas E. Ricks Bldg (RKS)", "Joseph Fielding Smith Bldg (SMI)","John W. Hart Physical Education Bldg (HRT)", "Hyrum Manwaring Student Center (MC)", "Student Health & Counseling Center (SHC)"];
    for (let i = 0; i < buildings.length; i++) {
        document.getElementById("building").innerHTML += i+1 + ") " +  `${buildings[i]}, ` + "<br>";
    }
}