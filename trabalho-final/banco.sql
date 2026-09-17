CREATE DATABASE projetodw;

USE projetodw;

CREATE TABLE pessoas_global(
    id UUID PRIMARY KEY,
    nome_completo VARCHAR(255),
    cpf VARCHAR(11) UNIQUE NOT NULL,
    email_institucional VARCHAR(255) UNIQUE,
    lattes_url VARCHAR(255) 
);

CREATE TABLE vinculos_institucionais(
    id UUID PRIMARY KEY,
    pessoa_id UUID,
    tipo_vinculo ENUM("ALUNO_GRADUACAO", "PROFESSOR_ADJUNTO", "EXTERNO"),
    matricula VARCHAR(50),
    departamento_id UUID,
    status ENUM("ATIVO", "EGRESSO", "AFASTADO"),
    FOREIGN KEY (pessoa_id) references pessoas_global (id),
    FOREIGN KEY (departamento_id) references departamentos (id)
);

CREATE TABLE projetos(
    id UUID PRIMARY KEY DEFAULT get_random_uuid(),
    titulo VARCHAR(255) NOT NULL,
    coordenador_vinculo_id UUID,
    unidade_id UUID,
    FOREIGN KEY (coordenador_vinculo_id) references vinculos_institucionais (id),
    FOREIGN KEY (unidade_id) references unidades_academicas (id)
);