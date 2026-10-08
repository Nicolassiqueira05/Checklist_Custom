let button = document.querySelector("#GenerateButton");

let t = {
  "Titulo": "Residente",
  "Items": [
      {
        "site": "Comprovante Bancário (Banestes)",
        "sei": "(X) Comprovante Bancário (cópia do extrato ou cartão) contendo número da conta corrente ou universitária (Banco do Estado do Espírito Santo - Banestes) (Art. 24);",
      },
      {
        "site": "Carteira de Trabalho",
        "sei": "(X) Carteira de Trabalho;",
      },
      {
        "site": "Carteira de Identidade",
        "sei": "(X) Carteira de Identidade;",
      },
      {
        "site": "Cadastro de Pessoa Física (CPF)",
        "sei": "(X) Cadastro de Pessoa Física (CPF);",
      },
      {
        "site": "Comprovante de Residência",
        "sei": "(X) Comprovante de Residência;",
      },
      {
        "site": "PIS/PASEP/NIT",
        "sei": "(X) PIS/PASEP;",
      },
      {
        "site": "Atestado de saúde ocupacional",
        "sei": "(X) ASO fornecido por médico do trabalho, com validade de até 60 (sessenta) dias, contados da data de emissão;",
      },
      {
        "site": "Comprovante de situação cadastral no Cadastro de Pessoas Físicas",
        "sei": "(X) Comprovante de situação cadastral no Cadastro de Pessoas Físicas;",
      },
      {
        "site": "Comprovante bancário",
        "sei": "(X) Comprovante de dados bancários, no qual conste número da agência e da conta corrente de sua titularidade mantida no Banco do Estado do Espírito Santo – BANESTES S.A;",
      },
      {
        "site": "Declaração da Instituição de Ensino que comprove vínculo educacional (Pós-Graduação, Mestrado, Doutorado e Pós-Doutorado) OU até 5 anos de formado",
        "sei": "(X) Declaração da Instituição de Ensino que comprove vínculo educacional (Pós-Graduação, Mestrado, Doutorado e Pós-Doutorado);"
      },
      {
        "site": "Diploma e/ou comprovante de conclusão de curso",
        "sei": "(X) Diploma e/ou comprovante de conclusão de curso;"
      },
      {
        "site": "Declaração de não inscrição ativa junto a OAB;",
        "sei": "(X) Declaração de não inscrição ativa junto a OAB;"
      },
    ],
    "Cert": [
      {
        "site": "Certidão Negativa da Justiça Eleitoral",
        "sei": "(X) Certidão Negativa da Justiça Eleitoral (serviço oferecido pelo Tribunal Superior Eleitoral - TSE); (Obtida no sítio eletrônico do TSE);"
      },
      {
        "site": "Certidão Negativa da Justiça Militar",
        "sei": "(X) Certidão Negativa da Justiça Militar (serviço oferecido pelo Superior Tribunal Militar - STM); (Obtida no sítio eletrônico do STM);"
      },
      {
        "site": "Certidões negativas dos distribuidores criminais das Justiças Federal, Estadual ou do Distrito Federal",
        "sei": "(X) Certidões negativas dos distribuidores criminais das Justiças Federal, Estadual ou do Distrito Federal dos lugares em que tenha residido nos últimos 5 (cinco) anos. (Obtidas nos sítios eletrônicos do TJES/TRF-ES/TRF 2º Região);"
      },
    ],
    "Form": [
      {
        "site": "Formulário I - Ficha Cadastral",
        "sei": "(X) Formulário I - Ficha Cadastral; ( <a href='https://www.tjes.jus.br/wp-content/uploads/FORMULARIO-I-Ficha-Cadastral-Residente-Jur%C3%ADdico.pdf'>Formulário I</a> )"
      },
      {
        "site": "Formulário IV - Declaração de não-vínculo Profissional",
        "sei": "(X) Declaração de não-vínculo Profissional; ( <a href='https://www.tjes.jus.br/wp-content/uploads/FORMULARIO-VI-Declara%C3%A7%C3%A3o-de-N%C3%A3o-V%C3%ADnculo-Profissional.pdf'>Formulário VI</a> )"
      },
      {
        "site": "Formulário V - Declaração com firma reconhecida",
        "sei": "(X) Formulário V - Declaração assinada pelo Residente, com firma reconhecida, na qual conste não ter sido indiciado em inquérito policial ou processado criminalmente ou, quando houver, notícia da ocorrência com os esclarecimentos pertinentes, para fins de análise da vida pregressa e atual e da conduta individual e social do aluno selecionado; ( <a href='https://www.tjes.jus.br/wp-content/uploads/FORMULARIO-VI-Declara%C3%A7%C3%A3o-de-N%C3%A3o-V%C3%ADnculo-Profissional.pdf'>Formulário V</a> )"
      },
      {
        "site": "Formulário VIII - Declaração de Parentesco",
        "sei": "(X) Formulário VIII - Declaração de Parentesco; ( <a href='https://www.tjes.jus.br/wp-content/uploads/FORMULARIO-VIII-Declara%C3%A7%C3%A3o-de-parentesco.pdf'>Formulário VIII</a> )"
      },
    ]
}

let json = JSON.stringify(t)

const pendencias = JSON.parse(json)

console.log(pendencias["Items"])

function carregarPend(pend){
    document.querySelector("#items").innerHTML += '<div class="section-title">Documentação</div>'
    pendencias["Items"].forEach((element, index) => {
       document.querySelector("#items").innerHTML += 
       `<div class="item">
       <input type="checkbox" id="check${index}">
       <label for="check${index}">${element["site"]}</label>
       </div>`
       
    });
    document.querySelector("#items").innerHTML += '<div class="section-title">Certidões</div>'
    pendencias["Cert"].forEach((element, index) => {
        document.querySelector("#items").innerHTML +=
       `<div class="item">
       <input type="checkbox" id="checkc${index}">
       <label for="check${index}">${element["site"]}</label>
       </div>`
       
    });
    document.querySelector("#items").innerHTML += '<div class="section-title">Formulários</div>'
    pendencias["Form"].forEach((element, index) => { 
        document.querySelector("#items").innerHTML +=
       `<div class="item">
       <input type="checkbox" id="checkd${index}">
       <label for="check${index}">${element["site"]}</label>
       </div>`
       
    });
}
carregarPend()

function Objeto(setor){
	return "À (AO)"
}

async function writeClipboardHTML(htmlText, plainText) {
    try {
        const blobHTML = new Blob([htmlText], { type: "text/html" });
        const blobText = new Blob([plainText], { type: "text/plain" });
        const data = [new ClipboardItem({
            "text/html": blobHTML,
            "text/plain": blobText
        })];
        await navigator.clipboard.write(data);
        window.alert("Copiado com sucesso para o SEI!");
    } catch (error) {
        window.alert("Erro ao copiar, peça para o Nicolas checar o console")
        console.error("Erro ao copiar: ", error);
    }
}

button.addEventListener("click", () => {
    const getPendencia = (id, texto) => {
        const el = document.getElementById(id);
        return (el && !el.checked) ? texto : null;
    };

    const pendenciasGerais = [];

    pendencias["Items"].forEach((element, index) => {
        console.log(element)
        pendenciasGerais.push(getPendencia(`check${index}`, element.sei))
    });
    pendencias["Cert"].forEach((element, index) => {
        console.log(element)
        pendenciasGerais.push(getPendencia(`checkc${index}`, element.sei))
    });
    pendencias["Form"].forEach((element, index) => {
        console.log(element)
        pendenciasGerais.push(getPendencia(`checkd${index}`, element.sei))
    });

    let corpoDocumentos = [
        ...pendenciasGerais,
    ].filter(i => i !== null).join(ls.getItem("spacing") == "true" ? "<br><br>" : "<br>");

    console.log(corpoDocumentos)

    let htmlContent = `
    <div style="font-family: Arial, sans-serif; font-size: 10pt; line-height: 1.5; color: #000;">
        <p><b>${Objeto(document.querySelector("#input-setor").value)} ${document.querySelector("#input-setor").value}</b></p>
        <p>Prezado (a) Senhor (a),</p>
        <p>Considerando que a emissão do Termo de Compromisso da Residência Jurídica deve ser nos termos da Resolução nº 14/2025</p>
        <p>Solicitamos que sejam juntadas as documentações abaixo descritas. Aguardamos o reenvio a esta Seção de Seleção e Acompanhamento de Estágio para prosseguimento e análise do pedido:</p>
       
        <p style="margin: 0; font-weight: ${ls.getItem("bold") == "true" ? 700 : 400}; background-color: #fbff00">${corpoDocumentos}</p>
       
        <p>Atenciosamente,</br>
        ${document.querySelector("#input-nome").value}
        </p>

    </div>`;

    writeClipboardHTML(htmlContent, htmlContent.replace(/<[^>]*>/g, ''));
});
