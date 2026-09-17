<?php 

    session_start(); 

    // (!) Negação 

    // Se NÃO existir a sessão nome 

    if(!isset($_SESSION["nome"])){

         session_destroy();

        $msg = "Acesso negado!";

        header("location:index.php?msg=".$msg);

    }    

 

    else if($_SESSION["tempo"] + 10*60 < time()){

        session_destroy();

        $msg = "Sessão expirada, se logue novamente!";

        header("location:index.php?msg=".$msg);

    }

    else{

        //renovando o tempo

        $_SESSION["tempo"] = time();

    }

?>