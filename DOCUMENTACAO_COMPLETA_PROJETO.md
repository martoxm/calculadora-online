# Documentacao Completa do Projeto: Calculadora Online

Este material foi escrito para servir como guia de estudo e reaproveitamento. A ideia e registrar nao apenas "o que" foi feito, mas tambem "por que" foi feito e "como" repetir em outros projetos.

## 1. Visao geral

O projeto e uma calculadora web com operacoes basicas, interface responsiva e pequenos pontos de interatividade visual.

### Tecnologias usadas

- HTML5 para estrutura.
- CSS3 para layout, estilo e animacoes.
- JavaScript para logica da calculadora e comportamento da interface.

### Arquivos principais

- `index.html`: estrutura da pagina.
- `style.css`: tema visual, responsividade e animacoes.
- `script.js`: funcoes da calculadora, eventos de teclado e atualizacao dinamica do subtitulo.

## 2. Estrutura da pagina (HTML)

O HTML foi organizado em blocos claros para separar responsabilidades visuais e funcionais:

1. Header visual (`hero-header`).
2. Area principal (`container`) contendo:

- calculadora (`calculadora`)
- seletor de cor (`custom-color`)
- rodape (`footer`)

### 2.1 Header interativo

O header foi criado para valorizar o topo da pagina e reforcar identidade visual.

Elementos importantes:

- `hero-header__glow--one` e `hero-header__glow--two`: manchas de brilho decorativas.
- `hero-header__brand`: bloco com icone + textos de marca.
- `headerSubtitle`: subtitulo atualizado pelo JavaScript com horario atual.

Ponto de acessibilidade:

- `aria-live="polite"` no subtitulo para informar mudancas sem interromper tecnologias assistivas.

### 2.2 Bloco da calculadora

Componentes:

- `input#visor` somente leitura (`readonly`) para exibir expressao e resultado.
- Grade de botoes com numeros, operadores, limpar, apagar e igual.

Decisao importante:

- Os botoes usam `onclick` para manter o exemplo simples para estudo inicial.

### 2.3 Seletor de cor

O `input type="color"` permite alterar o fundo da calculadora em tempo real, ajudando a praticar manipulacao de DOM e eventos.

### 2.4 Rodape

O rodape fica no fluxo da pagina e nao fixo na tela, evitando sobreposicao em telas menores.

## 3. Estilizacao e layout (CSS)

## 3.1 Configuracao global

- `box-sizing: border-box` para previsibilidade de dimensoes.
- Fonte padrao simples e legivel.
- `body` com `display: flex` e `flex-direction: column` para organizar topologia vertical.
- `min-height: 100vh` para ocupar toda altura visivel.

## 3.2 Fundo animado

Foi aplicado gradiente com 4 cores e animacao de deslocamento (`@keyframes gradient`).

Objetivo:

- Evitar fundo estatico.
- Criar profundidade visual sem imagens externas.

## 3.3 Variaveis CSS (custom properties)

Em `:root`, foram definidos tokens como:

- `--calc-bg`
- `--btn-bg`
- `--header-bg`
- `--header-border`
- `--header-accent`

Vantagens:

- Facilita ajustes de tema.
- Reduz repeticao de cores no arquivo.
- Permite reaproveitar padrao em outros projetos.

## 3.4 Header com efeito glass + glow

Tecnicas aplicadas:

- Fundo combinado (gradiente + cor transluzida).
- `backdrop-filter: blur(...)` para efeito de vidro.
- `box-shadow` para separacao do plano de fundo.
- `transition` para suavizar hover.
- Rotacao leve do icone no hover para feedback visual.

## 3.5 Calculadora

- Bloco central com largura responsiva (`width: min(100%, 320px)`).
- Botoes em `display: grid` de 4 colunas.
- Botao igual ocupando 3 colunas (`grid-column: span 3`).

## 3.6 Responsividade

Media query em `max-width: 640px` ajusta:

- paddings da pagina
- dimensoes do header e icone
- tamanho de textos
- espacamentos gerais

Resultado:

- melhor leitura e toque em celular
- layout continua estavel em tela pequena

## 4. Logica e interatividade (JavaScript)

## 4.1 Referencias de elementos

No inicio do script sao capturados:

- `visor`
- `headerSubtitle`
- `colorPicker`

## 4.2 Funcoes da calculadora

### `adicionar(valor)`

- Concatena o valor no visor.

### `limpar()`

- Zera totalmente o visor.

### `apagar()`

- Remove o ultimo caractere com `slice(0, -1)`.

### `calcular()`

- Avalia a expressao com `eval` dentro de `try/catch`.
- Em caso de erro de sintaxe, mostra `Erro`.

Observacao de estudo:

- Para projetos de aprendizado rapido, `eval` simplifica.
- Para projetos reais, o ideal e trocar por parser proprio para evitar riscos de seguranca.

## 4.3 Personalizacao de cor

No evento `input` do seletor de cor:

- o background da calculadora e atualizado em tempo real com a cor escolhida.

## 4.4 Subtitulo dinamico no header

### `atualizarSubtitulo()`

Fluxo:

1. Verifica se `headerSubtitle` existe.
2. Le hora atual.
3. Formata em `pt-BR` com hora e minuto.
4. Atualiza texto no header.

Execucao:

- roda uma vez ao carregar.
- roda novamente a cada 60 segundos (`setInterval`).

## 4.5 Suporte a teclado

Foi adicionado listener global de `keydown` para melhorar usabilidade.

Mapeamento implementado:

- Numeros (`0-9`) -> `adicionar(tecla)`
- Operadores (`+`, `-`, `*`, `/`) -> `adicionar(tecla)`
- Ponto (`.`) -> `adicionar(".")`
- `Enter` -> `calcular()`
- `Backspace` -> `apagar()`
- `Escape` -> `limpar()`

Beneficio:

- a calculadora funciona por clique e por teclado, melhorando experiencia de uso.

## 5. Decisoes de implementacao

Estas foram as escolhas principais e o motivo de cada uma:

1. Separacao clara por arquivo:

- Estrutura (HTML), visual (CSS) e comportamento (JS) separados.

2. Layout em coluna com flex:

- Facilita adicionar secoes sem quebrar centralizacao.

3. Rodape no fluxo:

- Evita sobreposicao em telas menores.

4. Animacao moderada:

- Interface ganha vida sem virar distração.

5. Interatividade pequena e constante:

- Relogio no subtitulo e seletor de cor tornam o projeto mais didatico.

## 6. Como repetir esta arquitetura em outro estudo

Use este passo a passo:

1. Monte o HTML com blocos semanticos (`header`, `main/container`, `footer`).
2. Defina tokens de cor em `:root` antes de estilizar componentes.
3. Configure o layout global com flex em coluna e `min-height: 100vh`.
4. Crie primeiro a estrutura funcional (visor + botoes).
5. So depois aplique efeitos visuais (sombras, blur, glow, transicoes).
6. Adicione interatividade incremental:

- entrada por botoes
- entrada por teclado
- personalizacao visual
- texto dinamico

7. Feche com media query para mobile.

## 7. Checklist de revisao rapida

Ao revisar antes de publicar, confira:

- [ ] visor atualiza corretamente ao clicar nos botoes
- [ ] `C`, `←` e `=` funcionam
- [ ] teclado executa os mesmos comandos
- [ ] seletor de cor altera a calculadora
- [ ] subtitulo atualiza com horario
- [ ] layout fica legivel em celular
- [ ] nenhum elemento sobrepoe outro

## 8. Melhorias futuras sugeridas

Para evoluir o projeto nos estudos:

1. Substituir `eval` por parser simples de expressoes.
2. Bloquear entradas invalidas (ex.: dois operadores seguidos).
3. Adicionar historico de calculos.
4. Criar tema claro/escuro com botao.
5. Incluir testes basicos de funcoes JS.

## 9. Conclusao

Este projeto evoluiu de uma calculadora funcional para uma experiencia mais completa:

- interface com identidade visual forte
- comportamento responsivo
- interacao por mouse e teclado
- componente dinamico no header

Como material de estudo, ele e valioso porque combina fundamentos de front-end com organizacao de codigo em camadas. Isso facilita manutencao, reaproveitamento e crescimento progressivo do projeto.
