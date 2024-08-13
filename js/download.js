function downloadHTML() {
    var conteudoHTML = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meu Arquivo HTML</title>
            <style>
                @media only screen and (max-width: 480px) {
                    .emkt-table {
                        max-width: 100%;
                        width: 100% !important;
                        overflow-wrap: break-word;
                    }

                    .emkt-table p {
                        width: 100% !important;
                        max-width: 360px !important;
                        margin-bottom: 20px;
                    }

                    .emkt-table td {
                        display: block !important;
                        max-width: 360px !important;
                        margin: 0 auto !important;
                    }

                    .emkt-table img {
                        width: 100% !important; 
                        height: auto !important;
                    }

                    .mobile-hidden {
                        display: none !important;
                    }

                    .mobile-show {
                        display: inline-table !important;
                    }
                }
            </style>
        </head>
        <body>
            <table style="width: 550" class="emkt-table" border="0" cellSpacing="0" cellPadding="0" width="100%" align="center">
                <tr>
                    <td style="FONT-FAMILY: Arial; WHITE-SPACE: normal; FONT-SIZE: 11px" valign="middle" align="center">
                        <font color="#444444">Caso
                        n&atilde;o esteja visualizando corretamente esta mensagem, 
                        <a style="COLOR: #0000ff; TEXT-DECORATION: underline" title="esse link" href="%%view_email_url%%"  >acesse aqui.</a>.</font>
                    </td>
                </tr>
            </table>
            <!--Estrutura de Email E-Marketing-->
            ${document.getElementById('tableWrapper').innerHTML}

            <table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse;width:100%;border:none;" bgcolor="white">
                  <tr>
                      <td>
                          <!-- text -->
                                  <table class="emkt-table" align="center" width="600px" style="margin: 0 auto;font-family: Nunito Sans; text-align: center">
                                      <tbody align="center">
                                          <tr>
                                              <td style="font-size: 9px;color: #1B1B1D;font-family: Arial;text-align: center;line-height: 16px;">
                                                  <p style="margin: 24px auto 0px auto;">© COPYRIGHT %%xtyear%%, TERRA NETWORKS BRASIL LTDA.<br>
                                                      Avenida Engenheiro Luís Carlos Berrini, 1.376 - 13º andar - Cidade Monções - São Paulo - SP<br>
                                                      CNPJ 91.088.328/0001-67  |   
                                                      <a href="http://click.online.terra.com.br/?qs=0746474c903276fc2ac4d0bde358574349c41dd4d2629ce627403420a67e6bc9b9d540e4cc0af2eca3d4f90e525019598c201631c7ea9be9" target="_blank" style="color: #6d6d6d;text-decoration:none;">www.terra.com.br</a>
                                                      <br /><br />
                                                  </p>
                                              </td>
                                          </tr>
                                   </table>
                          <!-- text -->
                      </td>
                  </tr>
              </table>
            <hr class="bars" style="border: 1px solid #DBDBDB; max-width: 520px;background:#DBDBDB">
            <custom name="opencounter" type="tracking"/>
            <table class="emkt-table" align="center" width="520px" style="margin: 0 auto;font-family: Nunito Sans; text-align: center;max-width: 520px;">
                <tbody align="center">
                    <tr>
                        <td style="font-size: 9px;color: #444141;font-family: Arial;text-align: center;line-height: 16px;">
                            <p style="margin: 24px auto;">
                              Caso seja do seu interesse interromper o recebimento de e-mails com este conteúdo, <a style="color: #1A98FF" href="%%unsub_center_url%%" target="_blank">acesse aqui</a> e remova seu endereço das nossas listas de envios.</p>
                        </td>
                    </tr>
             </table>
        </body>
        </html>
    `;

    var link = document.createElement('a');
    link.style.display = 'none';

    var blob = new Blob([conteudoHTML], { type: 'text/html' });
    var url = window.URL.createObjectURL(blob);

    link.href = url;
    link.download = 'indexmkt.html';

    document.body.appendChild(link);

    link.click();

    window.URL.revokeObjectURL(url);

    document.body.removeChild(link);
    
    // Remover o formulário de estilos do HTML após gerar o download
    var aplicarEstilosDiv = document.getElementById('aplicarEstilosDiv');
    aplicarEstilosDiv.parentNode.removeChild(aplicarEstilosDiv);
}
