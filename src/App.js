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
