<?php
    session_start();
    $login = $_POST["login"];
    $senha = $_POST["senha"];

    include_once "config/connect.php";

    $stmt = $con->prepare("SELECT * FROM usuario WHERE login = ?");
    $stmt->bindParam(1,$login);
    $stmt->execute();

    if($stmt->rowCount() == 1){
        $row = $stmt->fetch();
        if(password_verify($senha, $row["senha"])){
            $_SESSION["nome"] = $row["nome"];
            $_SESSION["perfil"] = $row["perfil"];
            $_SESSION["tempo"] = time();
            $_SESSION["cod"] = $row["cod"];

            header("location:painel.php");
            exit;
        }
    }
    $msg = "login ou senha inválido";
    header("location:index.html?msg=".$msg);
?>