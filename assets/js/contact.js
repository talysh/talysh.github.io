$(".contact-submit").click((event) => {
    event.preventDefault();
    const name = $("#inputName").val().trim();
    const email = $("#inputEmail").val().trim();
    const message = $("#inputMessage").val().trim();
    window.open(`mailto:taleh.aliyev@gmail.com?subject=Message from ${name}&body=${message} 
    Good contact: ${email}`);
}); 