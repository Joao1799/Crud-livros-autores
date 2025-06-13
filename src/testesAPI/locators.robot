*** Settings ***
Library           SeleniumLibrary
Suite Setup       Abrir Site
Suite Teardown    Close Browser

*** Variables ***
${URL}        https://joao1799.github.io/Crud-livros-autores/
${BROWSER}    firefox

*** Keywords ***
Abrir Site
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Wait Until Page Contains    Login

*** Test Cases ***
Fazer login
    Input Text    xpath=//input[@placeholder='Seu email...']    asdf@asdf.com
    Input Text    xpath=//input[@placeholder='Senha...']        asdf
    Click Button  xpath=//button[normalize-space(text())='Entrar']
    Wait Until Page Contains    Nome Autor

Pesquisar um Autor


    Click Button    xpath=//button[normalize-space(.)='Pesquisar Autores']
    Wait Until Element Is Visible    xpath=//select[@name='authorId']    5s
    Select From List By Label    xpath=//select[@name='authorId']    lucas teste
    Wait Until Page Contains    Livros do Autor(a)
    Click Button    xpath=//button[normalize-space(.)='×']

Criar um Autor

    Click Button    xpath=//button[normalize-space(.)='Adicionar Autor(a)']
    Input Text    xpath=(//input[@class='sc-hPOSDS idfjGh'])[1]    Marcelo
    Input Text    xpath=(//input[@class='sc-hPOSDS idfjGh'])[2]    marcelo@gmail.com
    Click Button    xpath=//button[contains(@class, 'eaUTDe')]
    Handle Alert    ACCEPT
    Wait Until Page Contains    Nome Autor:


Abrir menu lateral e acessar livros

    Wait Until Element Is Not Visible    css=div.sc-dZnbom.iJRKwS    10s
    Wait Until Element Is Visible    css=.sc-gnOvAp.jAMhu    10s
    Click Element    css=.sc-gnOvAp.jAMhu
    Wait Until Element Is Visible    xpath=//li[normalize-space()='Livros']    10s
    Click Element    xpath=//li[normalize-space()='Livros']
    Wait Until Page Contains    Nome do Livro

Criar um Livro

    Click Button    xpath=//button[normalize-space(.)='Adicionar Livro']
    Input Text    xpath=(//input[@class='sc-hPOSDS idfjGh'])[1]    Flor
    Select From List By Label    xpath=//select[@name='authorId']    lucas teste
    Input Text    xpath=(//input[@class='sc-hPOSDS idfjGh'])[2]    300
    Click Button    xpath=//button[contains(@class, 'eaUTDe')]
    Handle Alert    ACCEPT

Pesquisar um Livro


    Click Button    xpath=//button[normalize-space(.)='Pesquisar Livro']
    Wait Until Element Is Visible    xpath=//select[@name='bookId']    5s
    Select From List By Label    xpath=//select[@name='bookId']    livro livro
    Click Button    xpath=//button[normalize-space(.)='×']
