import './StepProgressBar.css'
import { FiThumbsUp, FiCheck } from 'react-icons/fi'

export default function StepProgressBar({ steps }) {
  const stepsBar = steps
  return (
    <div className="StepsBar">
      <ul>
        {stepsBar.map((step, index) => (
          <li
            className={`StepsBar-item ${
              step.concluido === 0 ? 'StepsBar-item-current' : ''
            }`}
            key={index}
          >
            <span className="StepsBar-count">
              {index === stepsBar.length - 1 ? (
                <FiThumbsUp size={22} color={'#fff'} />
              ) : (
                <FiCheck size={22} color={'#fff'} />
              )}
            </span>
            <span className="StepsBar-label">
              <span>{step.label}</span> <span>{step.data}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
