<div style="display: inline">
  <a href="https://www.jacksondev.com.br/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Website&message=JacksonDev&color=red&style=for-the-badge&logo=webflow"/>
  </a>
  <a href="https://pt-br.reactjs.org/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=&message=React Js&color=202124&style=flat-square&logo=react"/>
  </a>
</div>

# Projeto Step Progress Bar

### <a href="https://jacksonrp1.github.io/StepProgressBar/build/">Clique aqui</a> para visualizar o projeto concluído.

#### Scripts Disponíveis

```
git clone https://github.com/jacksonrp1/StepProgressBar.git
```

#### Dentro do projeto recém-clonado, você pode executar:

```
npm install
```

No diretório do projeto, execute:

```
npm start
```

Abra http://localhost:3000 para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.

## Assim que o component for chamado, informe um Array de Objetos com :

<!--ts-->
  * etapa: - só para organizar o fluxo, não aparece.
  * label: - mensagem que apresenta abaixo do step.
  * data: - data que apresenta abaixo do label.
  * concluido: - 0 ou 1.
<!--te-->

``` javascript
{
import StepProgressBar from './StepProgressBar.js'
import moment from 'moment/moment'

export default function App() {
  const date = moment()
  const stepbar = [
    {
      etapa: 1,
      label: 'Aguardando Pagamento',
      data: date.add(-5, 'day').format('DD/MM/YYYY HH:mm'),
      concluido: 1
    },
    {
      etapa: 2,
      label: 'Pedido recebido',
      data: date.add(1, 'day').format('DD/MM/YYYY HH:mm'),
      concluido: 1
    },
    {
      etapa: 3,
      label: 'Aguardando Envio',
      data: date.add(1, 'day').format('DD/MM/YYYY HH:mm'),
      concluido: 1
    },
    {
      etapa: 4,
      label: 'Enviado',
      data: date.add(1, 'day').format('DD/MM/YYYY HH:mm'),
      concluido: 1
    },
    {
      etapa: 5,
      label: 'Pedido entregue',
      data: date.add(1, 'day').format('DD/MM/YYYY HH:mm'),
      concluido: 1
    }
  ]
  return (
    <div className="App">
      <StepProgressBar steps={stepbar} />
    </div>
  )
}
```
### Abaixo exemplo de como fica o StepProgressBar após ter informando todos objetos com concluído = 1:
![image](https://user-images.githubusercontent.com/83042566/213297728-dbc4377d-081a-4adf-ab34-c540ee276e38.png)

### Abaixo exemplo de como fica o StepProgressBar após ter informando os 2 últimos com concluído = 0:
![image](https://user-images.githubusercontent.com/83042566/213299679-bd3631c5-5787-4304-9f28-259dd72ef0fa.png)

## Esse projeto cria os Steps conforme a quantidade de objetos informado ao componente.

Você também pode ver erros no console.

```
npm test
```

Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre como executar testes para obter mais informações.

```
npm run build
```

Cria o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!
