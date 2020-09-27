document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input[name='t_text']");
    let t_text = todo_input.value;
    if (t_text == "") {
      alert("해야할 일은 반드시 입력하세요 :(");
      document.querySelector("input[name='t_text']").focus();
      return false;
    }

    if (confirm("저장할까요?")) {
      document.querySelector("form").submit();
    }
  });

  // document
  //   .querySelectorAll(".btn-delete")
  //   .addEventListener("click", function () {
  //     let id = this.parentNode.getAttribute("data-id");
  //     console.log(id);

  //     if (confirm("삭제하시겠습니까?")) {
  //       document.location.replace("/delete/" + id);
  //     }
  //   });
});

function del_click(obj) {
  let id = obj.parentNode.getAttribute("data-id");
  console.log(id);

  if (confirm("삭제하시겠습니까?")) {
    document.location.replace("/delete/" + id);
  }
}
