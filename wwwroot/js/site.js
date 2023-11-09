$(document).ready(function () {

    
    
        $("#formulario").submit(function(e)
        
           
           {
             e.preventDefault();
             Cadastrar();
           }
        );
    }
);

function Cadastrar()
{
   var variaveis = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val(),
    };

    $.post("/Home/Cadastrar", variaveis)

    .done(function(data)
        {
            if(data.status == "OK")
            {
                $("#formulario").after("<h3>Cadastro realizado com sucesso</h3>");
                $("#formulario").hide();
            }
            else
            {
               alert(data.mensagem);
            }
        }
    )
    .fail(function()
        {
            alert("Erro!!");
        }

    )
};
