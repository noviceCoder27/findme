import { timeFormat } from "../utils/timeFormat"


const InfoCard = ({isCareer,institution,startDate,endDate,grade,role}) => {
  return (
    <div>
        <p className="text-lg font-semibold">{institution || "Institute Name"}</p>
        <p>
          {details?.startDate ? timeFormat(startDate):"Start Date"} - {details?.endDate ? timeFormat(endDate): "End Date"}
        </p>
        {isCareer ? <p>{role|| "Role"}</p>: <p>Grade: {grade || "0.0"}</p>}
    </div>
  )
}

export default InfoCard
