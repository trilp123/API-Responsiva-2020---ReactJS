import React from 'react';
import './index.css';

const Services = () => (

   <div className="bgc">

        <div className="serviços-container ajuste">

            <h1 className="Title">Alguns de nossos serviços</h1>

            <article className="serviço">

                <i className="fas fa-pencil-alt"></i>

                <legend>Cadastro de produtos</legend>

                <h4>Registros eficazes e ilimitados</h4>

                <p>
                    Sua tabela de produtos é acompanhada com menus iterativos
                    para o usuário, de forma simplicada e rápida, fazer 
                    todos os cadastros de produtos necessários sem algum
                    limite.
                </p>

            </article>

            <article className="serviço">

                <i className="fas fa-dolly-flatbed"></i>

                <legend>Controle de estoque</legend>

                <h4>Manejo de itens, requisições ágeis</h4>

                <p>
                    O sistema é composto por uma área simples e ágil 
                    de controle de inventário desenvolvida para melhorar
                    e simplificar os produtos cadastrados pela empresa. 
                </p>

            </article>

            <article className="serviço">

                <i className="fas fa-chart-line"></i>

                <legend>Relatório de vendas</legend>

                <h4>Seção de vendas e orçamentos</h4>

                <p>
                Disponibilazamos uma seção em que o usuário pode
                cadastrar todas as vendas da empresa, com todas 
                as informações mais vitas, desde número do pedido
                até o valor total obtido após a venda.
                </p>

            </article>

            <article className="serviço">

                <i className="far fa-chart-bar"></i>

                <legend>A Receber e A Pagar</legend>

                <h4>Entidades relacionais de contas</h4>

                <p>
                    Proporcionamos páginas compostas por entidades com
                    cadastro de registros, tanto de contas a receber quanto
                    a pagar, possibilitando ter a visibilidade de seus
                    atributos essenciais.
                </p>

            </article>

            <article className="serviço">

                <i className="fas fa-users"></i>

                <legend>Seção clientes</legend>

                <h4>Listagem de clientes</h4>

                <p>
                    Possibilidade de cadastrar e vizualizar todos os clientes
                    presentes da empresa, tendo como principal aspecto, ter todas
                    as informações do cliente, como CPF, Contato e Limite de Crédito.
                </p>

            </article>
            
            <article className="serviço">

                <i className="fas fa-file-signature"></i>

                <legend>Emissão de NF</legend>

                <h4>Integração com o governo</h4>

                <p>
                    Temos presente em nossa aplicação para proporcionar ao 
                    usuário, a funcionalidade de emissões de notas fiscais,
                    fazendo com que sua empresa não fique de fora das medidas
                    necessárias.
                </p>

            </article>
         
        </div>

   </div>

);

export default Services;
