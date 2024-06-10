import { timeFormat } from "../utils/timeFormat"


const InfoCard = ({isCareer,institution,startDate,endDate,grade,role}) => {
  return (
    <div>
        <p className="text-lg font-semibold">{institution}</p>
        <p>{timeFormat(startDate)}- {timeFormat(endDate)}</p>
        {isCareer ? <p>{role}</p>: <p>Grade: {grade}</p>}
    </div>
  )
}

export default InfoCard
