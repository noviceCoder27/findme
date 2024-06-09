

const InfoCard = ({isCareer,institution,startDate,endDate,grade,role}) => {
  return (
    <div>
        <p className="text-lg font-semibold">Central Institue Of Technology</p>
        <p>25 July,2019- 25 June,2023</p>
        {isCareer ? <p>SDE-2</p>: <p>Grade: 9.2</p>}
    </div>
  )
}

export default InfoCard
