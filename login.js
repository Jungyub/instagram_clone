const id_info = document.getElementsByClassName('id_item')[0];
const pw_info = document.getElementsByClassName("pw_item")[0];
const bt_info = document.getElementsByClassName("bt_item")[0];

id_info.addEventListener('keyup', function() {
  if (id_info.value !== "" && pw_info.value !== "") {
    bt_info.style.backgroundColor = "blue";
    bt_info.disabled = false;
  } else {
    bt_info.style.backgroundColor = "rgb(114, 189, 236)";
    bt_info.disabled = true;
  }
});

pw_info.addEventListener('keyup', function() {
  if (id_info.value !== "" && pw_info.value !== "") {
    bt_info.style.backgroundColor = "blue";
    bt_info.disabled = false;
  } else {
    bt_info.style.backgroundColor = "rgb(114, 189, 236)";
    bt_info.disabled = true;
  }
});

bt_info.addEventListener('click', function() {
  alert('환영합니다!');
})

pw_info.addEventListener('keypress', function(e) {
  if ((e.keyCode === 13) && (pw_info.value !== "")) {
    alert('환영합니다!');
  }
})