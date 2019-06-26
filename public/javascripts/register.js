    $(".kt-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },

            password: {
                required: true,
                minlength: 3
            },
        },

        messages: {
            email: {
                required: "Vui lòng nhập tên đăng nhập",
                email: "Vui lòng nhập email"
            },

            password: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu ít nhất là 3 ký tự!"
            }
        },
    });

    $(".kt-form").submit(function(event) {
        if (!$(".kt-form").valid()) {
            return
        }
        // dung ajax call 
        $.post("/register", {
                email: $('#email').val(),
                password: $('#password').val(),
            })
            .done(function(data) {
                console.log(data)
                if (data.success == 1) {
                    alert('Đăng ký thành công')
                    // window.location.href = '/';
                } else {
                    alert('Tài khoản bị trùng');
                    // window.location.href = 'register';
                }
            });
        event.preventDefault();
    });