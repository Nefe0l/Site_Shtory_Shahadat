window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("activator", window.scrollY > 0);
  });
  window.addEventListener("scroll", function () {
    var Effect = document.querySelector(".Effect");
    Effect.classList.toggle("active", window.scrollY > 0);
  });
  window.addEventListener("scroll", function () {
    var Color = document.querySelector(".Color");
    Color.classList.toggle("active", window.scrollY > 0);
  });


  let navigation = document.querySelector(".Ion-cons_Shtory_Shahadat");
  let navigation_2 = document.querySelector(".Section_Text_Div_Shtory_Shahadat");
  let navigation_3 = document.querySelector(".Div_Effect_2_Shtory_Shahadat");
  let navigation_4 = document.querySelector(".Effect_Img_2_Shtory_Shahadat");
  let navigation_5 = document.querySelector(".Effect_Dark_Img_Shtory_Shahadat");
  let navigation_6 = document.querySelector(".Div_Effect_2_A_Shtory_Shahadat");
  navigation.onclick = function () {
    navigation.classList.toggle("active");
    navigation_2.classList.toggle("active_2");
    navigation_3.classList.toggle("active_3");
    navigation_4.classList.toggle("active_4");
    navigation_5.classList.toggle("active_5");
    navigation_6.classList.toggle("active_6");
  };


  let Close = document.querySelector('.Nav_ion_cons_close');
  let Close_2 = document.querySelector('.Grey_a');
  let Close_3 = document.querySelector('.Test_a');
  let Close_4 = document.querySelector('.Test_a_2');
  let Close_5 = document.querySelector('.Test_a_3');
  Close.onclick = function () {
    Close.classList.toggle("Close_function");
    Close_2.classList.toggle("Close_function_2");
    Close_3.classList.toggle("Close_function_3");
    Close_4.classList.toggle("Close_function_4");
    Close_5.classList.toggle("Close_function_5");
  }

  const Color = document.querySelector(".Color");
  const header = document.querySelector("header");

  Color.onclick = function () {
    Color.classList.toggle("active_Color_Background");
    header.classList.toggle("active_header_Background");

  };
