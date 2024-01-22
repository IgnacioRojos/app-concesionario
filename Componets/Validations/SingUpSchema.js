import { object,ref, string } from "yup";


export let signUpSchema = object ({
    email: string()
        .required({"empty_mail":"por favor,indique su email"})
        .email({"invalid_mail": "el formato del email es invalido"}),

    password: string()
        .required({"empty_password":"por favor, indique una contraseña"})
        .min(6,{"invalid_password": "la contraseña debe tener 6 caracteres como minimo"}),
    
    confirmPassword: string()
        .required({"invalid_confirm_password":"por favor, confirme su contraseña"})
        .oneOf([ref("password"),null], {"invalid_match_password": "las contraseñas deben ser iguales "})
    

})