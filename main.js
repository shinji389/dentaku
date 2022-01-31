var result = document.getElementById("result");

function edit(elem){
  result.value = result.value + elem.value;
  
  if((result.value).slice(0,1) == "0" ){
    result.value = (result.value).slice(1);
    console.log(result.value);
  } else{  
    console.log(result.value);
  }
  
}

// var Input = Number(0); //現在値

// console.log(result.value);



$(document).ready(function(){
  $("#plus").click(function(){
    var Input = result.value;
    console.log(Input);
  });
  

  
  
  
  $(".buttonA").click(function(){
    $("#plus").prop("disabled", false);
  });
  
  $("#plus").click(function(){
    $("#plus").prop("disabled", true);
    $("#minus").prop("disabled", true);
    $("#multi").prop("disabled", true); 
    $("#division").prop("disabled", true);   
    // $("#D_point").prop("disabled", true);     
  });
});

$(document).ready(function(){
  $("#minus").click(function(){
    Input = result.value;
    console.log(Input);
    
  });
  
  $(".buttonA").click(function(){
    $("#minus").prop("disabled", false);
  });
  
  $("#minus").click(function(){
    $("#plus").prop("disabled", true);
    $("#minus").prop("disabled", true);
    $("#multi").prop("disabled", true); 
    $("#division").prop("disabled", true);   
    // $("#D_point").prop("disabled", true);     
  }); 


});

$(document).ready(function(){
  $("#multi").click(function(){
    Input = result.value;
    console.log(Input);
  });
  
  $(".buttonA").click(function(){
    $("#multi").prop("disabled", false);
  });  
    
  $("#multi").click(function(){
    $("#plus").prop("disabled", true);
    $("#minus").prop("disabled", true);
    $("#multi").prop("disabled", true); 
    $("#division").prop("disabled", true);   
    // $("#D_point").prop("disabled", true); 
  });    
  
});

$(document).ready(function(){
  $("#division").click(function(){
    Input = result.value;
    console.log(Input);
  });
  
  $(".buttonA").click(function(){
    $("#division").prop("disabled", false);
  });  
  
  $("#division").click(function(){
    $("#plus").prop("disabled", true);
    $("#minus").prop("disabled", true);
    $("#multi").prop("disabled", true); 
    $("#division").prop("disabled", true);   
    // $("#D_point").prop("disabled", true); 
  }); 
  
});


$(document).ready(function(){
  // buttonAは数字キー
  // $(".buttonA").click(function(){   
  //   $("#D_point").prop("disabled", false);
  // });  
  
  $("#D_point").click(function(){
    
    $("#plus").prop("disabled", true); //+
    $("#minus").prop("disabled", true); //-
    $("#multi").prop("disabled", true); //*
    $("#division").prop("disabled", true); // (/)  
    // $("#D_point").prop("disabled", true); //(.)
    $(".buttonA").prop("disabled", false);

  }); 
  
  
});

$(document).ready(function(){
  $("#total").click(function(){
    
    Total = eval(result.value);
    $('input[type="text"]').val(Total);
    console.log(Total);
    
  });
});

$(document).ready(function(){
  $("#reset").click(function(){
      Input = Number(0);
      console.log(Input);
      $('input[type="text"]').val("0");
      
  });
  
  $("#reset").click(function(){
    $("#plus").prop("disabled", true); //+
    $("#minus").prop("disabled", false); //-
    $("#multi").prop("disabled", true); //*
    $("#division").prop("disabled", true); // /  
    // $("#D_point").prop("disabled", true); 
    $(".buttonA").prop("disabled", false);

  }); 
  
});



